package appController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import Entity.TypeUser;
import Entity.User;
import AppServices.TypeUserService;
import AppServices.UserService;

import java.util.List;


import static org.springframework.http.HttpStatus.NOT_FOUND;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/users")
public class UserController {
    private UserService userService;
    private TypeUserService typeUserService;

    @Autowired
    public UserController(UserService userService, TypeUserService typeUserService) {
        this.userService = userService;
        this.typeUserService = typeUserService;
    }

    //done
    @GetMapping("")
    public List<User> findAll() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public User findById(@PathVariable int id) {
        User user = userService.findById(id);

        if (user == null) {
            throw new RuntimeException("User id not found - " + id);
        }

        return user;
    }

    
    //done
    @PostMapping("/create")
    public User addUser(@RequestBody User user) {
        // get the typeUser of the user in the database
        TypeUser dbTypeUser = typeUserService.findByType(user.getTypeUser().getType());

            // if the typeUser do not exist :
            // create it and assign it to the user
            if (dbTypeUser == null) {
                TypeUser typeUser = new TypeUser(user.getTypeUser().getType());
                typeUserService.save(typeUser);
                user.setTypeUser(typeUser);
            }
            // assign the typeUser to the user
            else {
                user.setTypeUser(dbTypeUser);
                return userService.save(user);
        }

        // set id to 0 in case it is set in the JSON
        // this force a save of a new item instead of an update
        user.setId(0);
        return userService.save(user);
    }

    @PutMapping("/update")
    public User updateUser(@RequestBody User user) {

        // Check if the user exist
        // throw 404 if not
        int id = user.getId();
        User dbUser = userService.findById(id);
        if (dbUser == null) {
            throw new ResponseStatusException(NOT_FOUND, "Unable to find the user with id : " + id);
        }

        // Check if the typeUser exist
        TypeUser dbTypeUser = typeUserService.findByType(user.getTypeUser().getType());

        // if the typeUser do not exist :
        // create it and assign it to the user
        if (dbTypeUser == null) {
            TypeUser typeUser = new TypeUser(user.getTypeUser().getType());
            typeUserService.save(typeUser);
            user.setTypeUser(typeUser);
        }
        // assign the typeUser to the user
        else {
            user.setTypeUser(dbTypeUser);
            return userService.save(user);
        }

        userService.save(user);
        return user;
    }

    @DeleteMapping("/{id}")
    public User deleteUser(@PathVariable int id) {
        User user = userService.findById(id);
        if (user == null) {
            throw new ResponseStatusException(NOT_FOUND, "Unable to find the user with id : " + id);
        }

        return userService.deleteById(id);
    }
}

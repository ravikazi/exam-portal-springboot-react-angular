package com.exam.examspringsever.controllers;

import com.exam.examspringsever.models.Role;
import com.exam.examspringsever.models.User;
import com.exam.examspringsever.models.UserRole;
import com.exam.examspringsever.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
@Transactional
public class UserController {

    @Autowired
    private UserService userService;
    
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    
    //Creating a user
    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {
    	//Encrypt Password Encoder by BCryptPasswordEncoder
    	user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
        Role role = new Role();
        role.setId(2L);
        role.setName("GENERAL");

        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);

        Set<UserRole> userRoleSet = new HashSet<>();
        userRoleSet.add(userRole);

        return this.userService.addUser(user, userRoleSet);
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username)
    {
        return this.userService.getUser(username);
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") Long userId)
    {
        this.userService.deleteUser(userId);
    }
    
//    @ExceptionHandler(UserFoundException.class)
//    public ResponseEntity<?> exceptionHandler(UserFoundException ex){
//    	return "User Already";
//    }
}

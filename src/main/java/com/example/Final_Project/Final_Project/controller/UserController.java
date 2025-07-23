package com.example.Final_Project.Final_Project.controller;


import com.example.Final_Project.Final_Project.models.User;
import com.example.Final_Project.Final_Project.repositories.UserRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserRepositories userRepositories;

    // Create a new user
    @PostMapping("/add")
    public ResponseEntity<User> createUser(@RequestBody User user){
        User saveUser = userRepositories.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(saveUser);
    }

    // Get all users
    @GetMapping("/all")
    public ResponseEntity<?> getAllUsers() {
        List<User> allUsers = userRepositories.findAll();
        return new ResponseEntity<>(allUsers, HttpStatus.OK);
    }

    // Get User by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getUserByID(@PathVariable int id) {
        User currentUser = userRepositories.findById(id).orElse(null);
        if (currentUser != null) {
            return new ResponseEntity<>(currentUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    // Update User by ID
    @PutMapping("/{id}")
    public ResponseEntity<?> updateUserByID(@PathVariable int id, @RequestBody User user) {
        Optional<User> selectedUserID = userRepositories.findById(id);
        if (selectedUserID.isPresent()) {
            User existingUser = selectedUserID.get();
            existingUser.setName(user.getName());
            existingUser.setUsername(user.getUsername());
            existingUser.setPassword(user.getPassword());
            User updatedUser = userRepositories.save(existingUser);
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    //Delete User by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUserByID(@PathVariable int id) {
        if (userRepositories.existsById(id)) {
            userRepositories.deleteById(id);
            return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }























}

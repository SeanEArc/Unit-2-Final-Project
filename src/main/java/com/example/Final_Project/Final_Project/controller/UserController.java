package com.example.Final_Project.Final_Project.controller;


import com.example.Final_Project.Final_Project.models.User;
import com.example.Final_Project.Final_Project.repositories.UserRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

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


















}

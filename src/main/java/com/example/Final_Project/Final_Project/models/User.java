package com.example.Final_Project.Final_Project.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue
    private int id;

    private String username;
    private String password;
    private String Password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<LoggedFoods> loggedFoods;

}

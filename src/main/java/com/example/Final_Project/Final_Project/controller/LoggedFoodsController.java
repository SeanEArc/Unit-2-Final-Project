package com.example.Final_Project.Final_Project.controller;

import com.example.Final_Project.Final_Project.models.LoggedFoods;
import com.example.Final_Project.Final_Project.repositories.LoggedFoodsRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/logged-foods")
public class LoggedFoodsController {

    @Autowired
    LoggedFoodsRepositories loggedFoodsRepositories;

    private final List<LoggedFoods> loggedFoods = new ArrayList<>();

    @GetMapping("")
    public ResponseEntity<?> getAllLoggedFoods(){
    List<LoggedFoods> allLoggedFoods = loggedFoodsRepositories.findAll();
        return new ResponseEntity<>(allLoggedFoods, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public LoggedFoods getLoggedFoodById(int id) {
        return loggedFoods.stream()
                .filter(food -> food.getFoodId() == id)
                .findFirst()
                .orElse(null);
    }

    @PostMapping
    public LoggedFoods addLoggedFood(LoggedFoods loggedFood) {
        loggedFoods.add(loggedFood);
        return loggedFood;
    }

    @PutMapping("/{id}")
    public LoggedFoods updateLoggedFoodItem(@PathVariable int id, @RequestBody LoggedFoods loggedFood) {
        for (int i = 0; i < loggedFoods.size(); i++) {
            if (loggedFoods.get(i).getFoodId() == id) {
                loggedFoods.set(i, loggedFood);
                return loggedFood;
            }
        }
        return null;
    }




}

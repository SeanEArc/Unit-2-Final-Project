package com.example.Final_Project.Final_Project.models;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
public class LoggedFoods {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    private LocalDate date;

    @ManyToOne
    private User user;

    @OneToMany(mappedBy = "loggedFoods", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<FoodItem> loggedFoodItems;

    // ------------------------ Contructors ---------------------------------

    public LoggedFoods() {}

    public LoggedFoods(LocalDate date, User user, List<FoodItem> loggedFoodItems) {
        this.date = date;
        this.user = user;
        this.loggedFoodItems = loggedFoodItems;
    }

    public LoggedFoods(LocalDate date, User user) {
        this.date = date;
        this.user = user;
    }

    // ------------------------Getters and Setters -----------------------------------------------

    public int getFoodId() {
        return Id;
    }

    public void setFoodId(int Id) {
        this.Id = Id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<FoodItem> getLoggedFoodItems() {
        return loggedFoodItems;
    }

    public void setLoggedFoodItems(List<FoodItem> loggedFoodItems) {
        this.loggedFoodItems = loggedFoodItems;
    }
}

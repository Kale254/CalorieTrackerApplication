"use strict";

/* 
     JavaScript
     Final Project


     Calorie Tracker Web Application
     Author: Kale Wetjen
     Date:   4/13/2023
*/

// Initialize food list as an empty array
let foodList = [];

// Function to add food to the list
function addFood() {
  // Get input values
  let foodName = document.getElementById("food-name").value;
  let calories = document.getElementById("calories").value;
  let proteins = document.getElementById("proteins").value;
  let fat = document.getElementById("fat").value;
  let carbs = document.getElementById("carbs").value;

  // Create food object
  let food = {
    name: foodName,
    calories: calories,
    proteins: proteins,
    fat: fat,
    carbs: carbs
  };

  // Add food object to list
  foodList.push(food);

  // Clear input fields
  document.getElementById("food-name").value = "";
  document.getElementById("calories").value = "";
  document.getElementById("proteins").value = "";
  document.getElementById("fat").value = "";
  document.getElementById("carbs").value = "";

  // Refresh food list
  refreshFoodList();
}

// Function to refresh food list
function refreshFoodList() {

  // Calculate total protein and calories
  let totalCalories = 0;
  let totalProteins = 0;
  let totalFat = 0;
  let totalCarbs = 0;
  for (let i = 0; i < foodList.length; i++) {
    totalCalories += parseFloat(foodList[i].calories);
    totalProteins += parseFloat(foodList[i].proteins);
    totalFat += parseFloat(foodList[i].fat);
    totalCarbs += parseFloat(foodList[i].carbs);
  }

  // Display total protein and calories in the header
  let header = document.getElementById("food-list-header");
  header.innerHTML = "Total Calories: " + totalCalories + ", Total Protein: " + totalProteins + "g, Total Fat: " + totalFat + "g, Total Carbs: " + totalCarbs + "g";
 
  // Get food list element
  let foodListElement = document.getElementById("food-list");

  // Clear existing list items
  foodListElement.innerHTML = "";

  // Loop through food list and create list items
  for (let i = 0; i < foodList.length; i++) {
    let food = foodList[i];
    let listItem = document.createElement("li");
    listItem.innerHTML = food.name + " - Calories: " + food.calories + ", Protein: " + food.proteins + "g, Fat: " + food.fat + "g, Carbs: " + food.carbs + "g";
    foodListElement.appendChild(listItem);
  }
}

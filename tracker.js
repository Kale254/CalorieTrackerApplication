"use strict";

/* 
     JavaScript
     Final Project


     Calorie Tracker Web Application
     Author: Kale Wetjen
     Date:   4/13/2023
*/

    let proteinLeft = 0;
    let fatLeft = 0;
    let carbsLeft = 0;
    let calories = 0;
    let totalCaloriesConsumed = 0;
    let totalProteinConsumed = 0;

    const calorieForm = document.querySelector("#calorie-form");
    const outputDiv = document.querySelector("#calorie-output");

    calorieForm.addEventListener("submit", function(event) {
      event.preventDefault();

  // Get user input values
  const goal = parseFloat(document.querySelector("#goal").value);
  const proteinGoal = parseFloat(document.querySelector("#proteinGoal").value);
  const fatGoal = parseFloat(document.querySelector("#fatGoal").value);
  const carbsGoal = parseFloat(document.querySelector("#carbsGoal").value);
  const consume = parseFloat(document.querySelector("#consume").value);
  const protein = parseFloat(document.querySelector("#protein").value);
  const fat = parseFloat(document.querySelector("#fat").value);
  const carbs = parseFloat(document.querySelector("#carbs").value);

  if (goal > consume) {
    calories = goal - consume;
  } else {
    calories = 0;
  }

  if (protein < proteinGoal) {
    proteinLeft = proteinGoal - protein;
  } else {
    proteinLeft = 0;
  }

  if (fat < fatGoal) {
    fatLeft = fatGoal - fat;
  } else {
    fatLeft = 0;
  }

  if (carbs < carbsGoal) {
    carbsLeft = carbsGoal - carbs;
  } else {
    carbsLeft = 0;
  }

  // Display results to the user
  outputDiv.innerHTML = `<p>You have approximately <strong>${calories} calories</strong> left for today.</p>
                          <p>You need <strong>${proteinLeft}g of protein</strong> to reach your daily goal.</p>
                          <p>You need <strong>${fatLeft}g of fat</strong> to reach your daily goal.</p>
                          <p>You need <strong>${carbsLeft}g of carbs</strong> to reach your daily goal.</p>`;
});

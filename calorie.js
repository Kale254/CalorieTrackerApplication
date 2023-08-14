"use strict";

/*  
    JavaScript
    Final Project

    Calorie Tracker Web Application
    Author: Kale Wetjen
    Date:   4/13/2023
*/

const calorieForm = document.querySelector("#calorie-form");
const outputDiv = document.querySelector("#calorie-output");

calorieForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get user input values
  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const exercise = document.querySelector("#exercise").value;
  const age = parseInt(document.querySelector("#age").value);

  // Calculate calories based on input values
  let bmr;
  if (gender === "male") {
    bmr = 66.47 + (6.24 * weight) + (12.7 * height) - (6.755 * age);
  } else if (gender === "female") {
    bmr = 655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
  }

  let activityFactor;
  if (exercise === "sedentary") {
    activityFactor = 1.2;
  } else if (exercise === "lightlyActive") {
    activityFactor = 1.375;
  } else if (exercise === "moderatelyActive") {
    activityFactor = 1.55;
  } else if (exercise === "veryActive") {
    activityFactor = 1.725;
  } else if (exercise === "superActive") {
    activityFactor = 1.9;
  }

  const calories = Math.round(bmr * activityFactor);

  // Display results to the user
  outputDiv.innerHTML = `<p>You burn approximately <strong>${calories} calories</strong> per day based on your input.</p>
                         <p>*Note that this is just an approximation and might change depending on the day, health conditions, etc. </p>`;
});

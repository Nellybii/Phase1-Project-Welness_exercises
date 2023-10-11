document.addEventListener("DOMContentLoaded", function () {
  let id = document.querySelector("#exers");
  let openDetails = null; // to track the currently open exercise details
    console.log(button1);

  function getAllExercises() {
    fetch("https://api.api-ninjas.com/v1/exercises", {
      method: "GET",
      headers: {
        "X-Api-Key": "EPc0NkSNg0JxRXN5d+E7Sg==g0SNWTUmVNJnZgeK",
      },
    })
      .then((response) => response.json())
      .then((exercises) => {
        exercises.forEach((exercise) => {
          // a new paragraph for each exercise and display the exercise name
          let p = document.createElement("p");
          p.innerHTML = exercise.name;
          id.appendChild(p);
          p.style.color = "blue";
          p.style.display = "flex";

          // a list for exercise details and set additional details
          let exerciseDetails = document.createElement("ul");
          exerciseDetails.className = "details";
          exerciseDetails.style.color = "#151515";
          exerciseDetails.style.display = "none"; // Initially hide details
          exerciseDetails.innerHTML = `
                  <li>Type: ${exercise.type}</li>
                  <li>Muscle: ${exercise.muscle}</li>
                  <li>Equipment: ${exercise.equipment}</li>
                  <li>Difficulty: ${exercise.difficulty}</li>
                  <li>Description: ${exercise.description}</li>
              `;

          p.appendChild(exerciseDetails);

          // Add a click event listener to each exercise
          p.addEventListener("click", (e) => {
            e.preventDefault();

            // Close any previously open details
            if (openDetails) {
              openDetails.style.display = "none";
            }

            // Toggle the clicked exercise's details
            exerciseDetails.style.display =
              exerciseDetails.style.display === "none" ? "block" : "none";

            // Update the currently open details
            openDetails = exerciseDetails;
          });
        });
      })
      .catch((error) => console.log("error", error));
  }

  getAllExercises();
});

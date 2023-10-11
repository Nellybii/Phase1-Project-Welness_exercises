document.addEventListener("DOMContentLoaded", function () {
  let id = document.querySelector("#exers");
  let openDetails = null; // to track the currently open exercise details
  let button1 = document.getElementById("btn");
  //console.log(button1);
// eventlistener to allow the user search on the desired exercise
button1.addEventListener("click", (e) => {
  // Get all the exercise detail elements with class "details"
  const exerciseDetails = document.querySelectorAll(".details");

  exerciseDetails.forEach((exerciseDetail) => {
    // Find the difficulty within the exercise details
    const difficultyElement = exerciseDetail.querySelector("li"[3]);
   //console.log(difficultyElement)
    if (difficultyElement) {
      const difficulty = difficultyElement.textContent.replace("Difficulty: ", "");

      if (difficulty === "beginner") {
        exerciseDetail.style.display = "none";
      } else {
        exerciseDetail.style.display = "block";
      }
    }
  });
});
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
                  <li id="diff">Difficulty: ${exercise.difficulty}</li>
                  <li>Instruction: ${exercise.instructions}</li>
              `;
          let div = document.createElement("div");
          exerciseDetails.appendChild(div);
          let btn1 = document.createElement("i");
          div.appendChild(btn1);
          btn1.innerHTML =`
          <i class="fa fa-thumbs-up"></i>
          `
          btn1.style.color = "grey"
          let btn2 = document.createElement("i");
          div.appendChild(btn2);
          btn2.innerHTML =`
          <i class="fa fa-thumbs-down"></i>
          `
          btn2.style.color = "grey"
          btn1.addEventListener("click",(e)=>{
            e.preventDefault();
            btn1.style.color = 'red'
            if(btn1.style.color = 'red'){
              btn2.style.color = "grey"
            }
          })
          btn2.addEventListener("click",(e)=>{
            e.preventDefault();
            btn2.style.color = 'blue' 
          if(btn2.style.color = 'blue'){
            btn1.style.color = "grey"
          }
          })

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

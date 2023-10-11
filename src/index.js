document.addEventListener("DOMContentLoaded", function () {
  //let id = document.querySelector("#exers");
  let openDetails = null; // to track the currently open exercise details
  let button1 = document.getElementById("btn");
  let container = document.querySelector(".container");

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
          let div1 = document.createElement("div");
          div1.className = "row row-cols-1 row-cols-md-3";
          div1.style = "width: 900px";
          div1.display = "center";
          container.appendChild(div1);
          let div2 = document.createElement("div");
          div2.className = "col";
          div1.appendChild(div2);
          let div3 = document.createElement("div");
          div3.className = "card";
          div2.appendChild(div3);
          let div4 = document.createElement("div");
          div4.className = "card-body";
          div3.appendChild(div4);
          let h5 = document.createElement("h5");
          h5.innerHTML = exercise.name;
          h5.style.color = "blue";
          h5.style.display = "grid";
          div4.appendChild(h5);
          let p = document.createElement("p");
          p.className = "card-text";
          div4.appendChild(p);

          let exerciseDetails = document.createElement("ul");
          p.appendChild(exerciseDetails);
          exerciseDetails.className = "details";
          exerciseDetails.style.display = "none"; // Initially hide details
          exerciseDetails.innerHTML = `
                  <li>Type: ${exercise.type}</li>
                  <li>Muscle: ${exercise.muscle}</li>
                  <li>Equipment: ${exercise.equipment}</li>
                  <li>Difficulty: ${exercise.difficulty}</li>
                  <li>Instruction: ${exercise.instructions}</li>
              `;
          let div = document.createElement("div");
          exerciseDetails.appendChild(div);
          let btn1 = document.createElement("i");
          div.appendChild(btn1);
          btn1.innerHTML = `
          <i class="fa fa-thumbs-up"></i>
          `;
          btn1.style.color = "grey";
          let btn2 = document.createElement("i");
          div.appendChild(btn2);
          btn2.innerHTML = `
          <i class="fa fa-thumbs-down"></i>
          `;
          btn2.style.color = "grey";
          btn1.addEventListener("click", (e) => {
            e.preventDefault();
            btn1.style.color = "red";
            if ((btn1.style.color = "red")) {
              btn2.style.color = "grey";
            }
          });
          btn2.addEventListener("click", (e) => {
            e.preventDefault();
            btn2.style.color = "blue";
            if ((btn2.style.color = "blue")) {
              btn1.style.color = "grey";
            }
          });

          // Add a click event listener to each exercise
          h5.addEventListener("click", (e) => {
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
          // eventlistener to allow the user search on the desired exercise
          button1.addEventListener("click", (e) => {
            const exerciseDetails = document.querySelector(".container");
            function iterationThroughDetails(){
            exerciseDetails.forEach((exerciseDetail) => {
              const difficultyElement =
                exerciseDetail.querySelector("li:nth-child(4)"); // Adjust the selector
              if (difficultyElement) {
                const difficulty = difficultyElement.textContent.replace(
                  "Difficulty: ",
                  ""
                );

                if (difficulty === "beginner") {
                  exerciseDetail.style.display = "none";
                } else {
                  exerciseDetail.style.display = "block";
                }
              }
            });
          }
          });
        });
      })
      .catch((error) => console.log("error", error));
  }

  getAllExercises();
});

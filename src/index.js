document.addEventListener("DOMContentLoaded", function () {
  let openDetails = null; // to track the currently open exercise details
  let button1 = document.getElementById("btn");
  let div = document.querySelector(".container");
  //renering all exercise
  function renderAllExercises(exercises) {
    exercises.forEach((exercise) => {
      console.log(exercise);
      let exerciseList = document.createElement("li");
      div.appendChild(exerciseList);
      exerciseList.innerHTML = exercise.name;

      let exerciseDetails = document.createElement("div");
      let ul = document.createElement("ul");
      exerciseDetails.appendChild(ul);
      exerciseList.addEventListener("click", (e) => {
        e.preventDefault();
        exerciseList.appendChild(ul);
        ul.innerHTML = `
    <li>Type: ${exercise.type}</li>  
    <li>Muscle: ${exercise.muscle}</li>
    <li>Equipment: ${exercise.equipment}</li>
    <li>Difficulty: ${exercise.difficulty}</li>
    <li>Instruction: ${exercise.instructions}</li>
    `;
      });
      let div2 = document.createElement("div");
      exerciseDetails.appendChild(div2);
      let btn1 = document.createElement("i");
      div2.appendChild(btn1);
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
    });
  }

  function getAllExercises() {
    fetch("https://api.api-ninjas.com/v1/exercises", {
      method: "GET",
      headers: {
        "X-Api-Key": "EPc0NkSNg0JxRXN5d+E7Sg==g0SNWTUmVNJnZgeK",
      },
    })
      .then((response) => response.json())
      .then((exercises) => renderAllExercises(exercises))

      //     let div = document.createElement("div");
      //     exerciseDetails.appendChild(div);
      //     let btn1 = document.createElement("i");
      //     div.appendChild(btn1);
      //     btn1.innerHTML = `
      //     <i class="fa fa-thumbs-up"></i>
      //     `;
      //     btn1.style.color = "grey";
      //     let btn2 = document.createElement("i");
      //     div.appendChild(btn2);
      //     btn2.innerHTML = `
      //     <i class="fa fa-thumbs-down"></i>
      //     `;
      //     btn2.style.color = "grey";
      //     btn1.addEventListener("click", (e) => {
      //       e.preventDefault();
      //       btn1.style.color = "red";
      //       if ((btn1.style.color = "red")) {
      //         btn2.style.color = "grey";
      //       }
      //     });
      //     btn2.addEventListener("click", (e) => {
      //       e.preventDefault();
      //       btn2.style.color = "blue";
      //       if ((btn2.style.color = "blue")) {
      //         btn1.style.color = "grey";
      //       }
      //     });

      //     // Add a click event listener to each exercise
      //     h5.addEventListener("click", (e) => {
      //       e.preventDefault();

      //       // Close any previously open details
      //       if (openDetails) {
      //         openDetails.style.display = "none";
      //       }

      //       // Toggle the clicked exercise's details
      //       exerciseDetails.style.display =
      //         exerciseDetails.style.display === "none" ? "block" : "none";

      //       // Update the currently open details
      //       openDetails = exerciseDetails;
      //     });
      //     // eventlistener to allow the user search on the desired exercise
      //     button1.addEventListener("click", (e) => {
      //       const exerciseDetails = document.querySelector(".container");
      //       console.log(exerciseDetails);
      //       function iterationThroughDetails() {
      //         exerciseDetails.forEach((exerciseDetail) => {
      //           const difficultyElement =
      //             exerciseDetail.querySelector("li:nth-child(4)");
      //           if (difficultyElement) {
      //             const difficulty = difficultyElement.textContent.replace(
      //               "Difficulty: ",
      //               ""
      //             );

      //             if (difficulty === "beginner") {
      //               exerciseDetail.style.display = "none";
      //             } else {
      //               exerciseDetail.style.display = "block";
      //             }
      //           }
      //         });
      //       }
      //       iterationThroughDetails();
      //     });
      //   });
      // })
      .catch((error) => console.log("error", error));
  }

  getAllExercises();
});

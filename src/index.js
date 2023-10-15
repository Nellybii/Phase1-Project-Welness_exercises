let globalExercises = null;
document.addEventListener("DOMContentLoaded", function () {
  let div = document.querySelector(".container");

  let beginner = document.querySelector("#btn");
  beginner.addEventListener("click", (e) => {
    e.preventDefault();

    const beginnerExercise = globalExercises.filter(
      (e) => e.difficulty === "beginner"
    );

    renderAllExercises(beginnerExercise);

    console.log(beginnerExercise);
  });
  let intermediate = document.querySelector("#btn_2");
  intermediate.addEventListener("click", (e) => {
    e.preventDefault();
    const intermediateExercise = globalExercises.filter(
      (e) => e.difficulty === "intermediate"
    );
    //exerciseList.innerHTML = " "
    renderAllExercises(intermediateExercise);

    //console.log(intermediateExercise);
  });
  //rendering all exercise
  function renderAllExercises(exercises) {
    exercises.forEach((exercise) => {
      console.log(exercise);
      let exerciseList = document.createElement("li");
      div.appendChild(exerciseList);
      exerciseList.innerHTML = exercise.name;
      let exerciseDetails = document.querySelector("#details");
      //console.log(exerciseDetails);

      exerciseList.addEventListener("click", (e) => {
        e.preventDefault();
        exerciseDetails.innerHTML = `
 <li>Type: ${exercise.type}</li>
 <li>Muscle: ${exercise.muscle}</li>
 <li>Equipment: ${exercise.equipment}</li>
 <li>Difficulty: ${exercise.difficulty}</li>
 <li>Instruction: ${exercise.instructions}</li>
 `;
        const icon = document.createElement("div");
        exerciseDetails.appendChild(icon);
        //console.log(icon)
        icon.innerHTML = `
    <i class="fa fa-thumbs-up" style="font-size:48px;color:grey"></i>
    `;
        const i = document.createElement("i");
        i.innerHTML = `
        <i class="fa fa-thumbs-down" style="font-size:48px;color:grey"></i>`;

        exerciseDetails.appendChild(i);
        icon.addEventListener("click", (e) => {
          e.preventDefault();
          i.innerHTML= " "
          //icon.innerHTML= " "
          const clickedIcon = e.target;
          clickedIcon.style.color = "red";
        });
        i.addEventListener("click", (e) => {
          e.preventDefault();
          //i.innerHTML= " "
          icon.innerHTML= " "
          const clickedi = e.target;
          if (clickedi.style.color === "blue") {
            clickedi.style.color = "grey"; // Change the color of the clicked icon
          } else {
            clickedi.style.color = "blue"; // Change the color to blue if it's not already blue
          }
        });
      });
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
      .then((exercises) => {
        globalExercises = exercises;
        renderAllExercises(exercises);
      })
      .catch((error) => console.log("error", error));
  }

  getAllExercises();
});

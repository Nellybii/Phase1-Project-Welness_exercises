document.addEventListener("DOMContentLoaded", function () {
  let div = document.querySelector(".container");
  //rendering all exercise
  function renderAllExercises(exercises) {
    exercises.forEach((exercise) => {
      console.log(exercise);
      let exerciseList = document.createElement("li");
      div.appendChild(exerciseList);
      exerciseList.innerHTML = exercise.name;
      let exerciseDetails = document.querySelector("#details");
      //console.log(exerciseDetails)
      // let beginner = document.querySelector("#btn");
      // beginner.addEventListener("click", (e) => {
      //   e.preventDefault();

      //   const beginnerExercise = exercises.filter((exercise) => {
      //     exercise.difficulty === "beginner";
      //   });
      //   console.log(beginnerExercise);
      // });
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
        i.innerHTML = `<i class="fa fa-thumbs-down" style="font-size:48px;color:grey"></i>`;

        exerciseDetails.appendChild(i);
        icon.addEventListener("click", (e) => {
          e.preventDefault();
          const clickedIcon = e.target;
          clickedIcon.style.color = "red";
        });
        i.addEventListener("click", (e) => {
          e.preventDefault();
          const clickedi = e.target;
          if(clickedi.style.color = "blue"){
            icon.style.color = "grey"
          }
          else{
            i.style.color = "grey"
          }
        });
      });
    });
  }

  // btn1.style.color = "grey";
  // let btn2 = document.createElement("i");
  // div.appendChild(btn2);
  // btn2.innerHTML = `
  //     <i class="fa fa-thumbs-down"></i>
  //     `;
  // btn2.style.color = "grey";

  function getAllExercises() {
    fetch("https://api.api-ninjas.com/v1/exercises", {
      method: "GET",
      headers: {
        "X-Api-Key": "EPc0NkSNg0JxRXN5d+E7Sg==g0SNWTUmVNJnZgeK",
      },
    })
      .then((response) => response.json())
      .then((exercises) => renderAllExercises(exercises))

      .catch((error) => console.log("error", error));
  }

  getAllExercises();
});

document.addEventListener("DOMContentLoaded", function () {
  let id = document.querySelector("#exers")
  //console.log(id);
  function getAllExercises() {
      fetch("https://api.api-ninjas.com/v1/exercises", {
          method: 'GET',
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
                p.style.color = "blue"
                let exerciseDetails = document.createElement('ul')
                exerciseDetails.className = "details"
                exerciseDetails.style.color = "#151515"
                p.appendChild(exerciseDetails)
                exerciseDetails.innerHTML = `
                <li>${exercise.type}</li>
                <li>${exercise.muscle}</li>
                <li>${exercise.equipment}</li>
                <li>${exercise.difficulty}</li>
                <li>${exercise.descrption}</li>
                `

p.addEventListener("click",(e)=>{
  e.preventDefault()
  
})
            });
          })
          .catch((error) => console.log("error", error));
  }
  
  getAllExercises();
});

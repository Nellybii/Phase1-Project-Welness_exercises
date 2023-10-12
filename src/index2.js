document.addEventListener("DOMContentLoaded", () => {
  function getAllExercises() {
    fetch("https://api.api-ninjas.com/v1/exercises", {
      method: "GET",
      headers: {
        "X-Api-Key": "EPc0NkSNg0JxRXN5d+E7Sg==g0SNWTUmVNJnZgeK",
      },
    })
      .then((response) => response.json())
      .then((exercise) => console.log(exercise))
      .catch((error) => console.log("error", error));
    
      function renderOneExercise(exercise) {
        let exerciseName = document.createElement("h5");
        h5.className = "card-text";
        h5.innerHTML  = animal.name;
    }
    renderOneExercise();
  }
  getAllExercises();


  function initialize(){
    getAllExercises.forEach(exercise => {
        renderOneExercise(exercise)
    });
}
});

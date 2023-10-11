document.addEventListener("DOMContentLoaded", function(){
    function getAllExercises(exercises) {
        fetch("https://api.api-ninjas.com/v1/exercises",{
            method: 'GET',
            headers: {
                "X-Api-Key": "EPc0NkSNg0JxRXN5d+E7Sg==g0SNWTUmVNJnZgeK",
            },
        })
          .then((response) => response.json())
          .then((exercises) => console.log(exercises))
          .catch((error) => console.log("error", error));
    }
    getAllExercises()
    function getEachExercise(exercise){
getAllExercises.forEach()
    }
})
  


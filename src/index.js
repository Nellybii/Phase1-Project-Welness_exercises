document.addEventListener("DOMContentLoaded", function () {
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
                    // Print each exercise's details
                    console.log(exercise);
                });
            })
            .catch((error) => console.log("error", error));
    }
    function getEachExercises(){
        exercises.forEach((exercise) => {
                    // Print each exercise's details
                    console.log(exercise);
                });
    }
    getAllExercises();
});






  


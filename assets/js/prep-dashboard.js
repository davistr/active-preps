

var randomRecipeBtn = document.querySelector("#random-btn");
var randomMealInputEl = document.querySelector("#random-container");
var userMealInputEl = document.querySelector("#meals-container");

var ingredientsArray = [];



var getUserMeals = function () {
    fetch("https://api.spoonacular.com/recipes/random?apiKey=c62b70b1d026480f8c5a5b248bec1b0a&number=50").then(function (response) {

        console.log(response);
        response.json().then(function (data) {
            console.log(data);
            displayUserMeals(data);
        })
            .catch(function (error) {
                console.error(error);
            });
    });
};


var getRandomMeals = function () {

    fetch("https://api.spoonacular.com/recipes/random?apiKey=c62b70b1d026480f8c5a5b248bec1b0a&number=50").then(function (response) {

        console.log(response);
        response.json().then(function (data) {
            console.log(data);
            displayRandomMeals(data);
        })
            .catch(function (error) {
                console.error(error);
            });
    });
};


// var getMealPlan = function () {
//     fetch("https://api.spoonacular.com/mealplanner/generate?timeFrame=day" + "apiKey=c62b70b1d026480f8c5a5b248bec1b0a").then(function (response) {
//         console.log(response);
//         response.json().then(function (data) {
//             console.log(data);
//         });
//     });
// };


var displayUserMeals = function (data) {

};


var displayRandomMeals = function (data) {

    for (var i = 0; i < 3; i++) {

        var max = 49;
        var position = Math.floor(Math.random() * (max + 1));

        var randomMealEl = document.createElement('card');
        randomMealEl.className = 'box';

        // create anchor for recipe link
        var linkBtn = document.createElement('a');

        // var test = data;
        // console.log(test);
        randomMealEl.innerHTML = data.recipes[position].title + "<br />" + "<img src=\"" + data.recipes[position].image + "\">" + "<br />" +
            "Preparation Time: " + data.recipes[position].readyInMinutes + "<br />" + "Number of Servings: "
            + data.recipes[position].servings + "<br />" + "<a class='link-btn' href= " + data.recipes[position].sourceUrl + "></a>";

        randomMealInputEl.setAttribute('style', 'margin:8px; padding:6px;');
        randomMealInputEl.appendChild(randomMealEl);
        randomMealInputEl.appendChild(linkBtn);

    }

};



// // event listener for button
// randomRecipeBtn.addEventListener("click", getRandomMeals);
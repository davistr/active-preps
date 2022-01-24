

var randomRecipeBtn = document.querySelector("#random-btn");
var randomMealInputEl = document.querySelector("#random-container");
var userMealInputEl = document.querySelector("#meals-container");


var ingredientList = document.getElementById('ingredients').value.split(',');
var ingredientsArray = [];

// for (var i = 0; i < ingredientList.length; i++) {
//     if (ingredientList[i] != "") {
//         ingredientsArray.push(ingredientList[i]);
//     }
// }


// fetch recipes by ingredients
var getUserMeals = function () {
    fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=eb288112c5b6408fb3559fb3b986a947&ingredients=chicken,+broccoli").then(function (response) {

        console.log(response);
        response.json().then(function (data) {
            console.log(data);
            displayUserMeals(data);
            console.log(ingredientList);

        })
            .catch(function (error) {
                console.error(error);
            });
    });
};

// get 50 random meals from call
var getRandomMeals = function () {

    fetch("https://api.spoonacular.com/recipes/random?apiKey=eb288112c5b6408fb3559fb3b986a947&number=100").then(function (response) {

        console.log(response);
        response.json().then(function (data) {
            console.log(data);
            randomMealInputEl.innerHTML = "";
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

    for (var i = 0; i < 3; i++) {

        var userMealEl = document.createElement('card');
        userMealEl.className = 'card';

        userMealEl.innerHTML = "<span style='font-size:16px; font-weight:bold; padding-bottom:4px'>" + data[i].title +
            "</span>" + "<br />" + "<img src=\"" + data[i].image + "\">" + "<br />" +
            "<a class='link' target='_blank' href=" + data[i].sourceUrl + ">Go To Recipe!</a>";

        userMealInputEl.appendChild(userMealEl);
    }
};


var displayRandomMeals = function (data) {


    for (var i = 0; i < 3; i++) {

        var max = 49;
        var position = Math.floor(Math.random() * (max + 1));

        var randomMealEl = document.createElement('card');
        randomMealEl.className = 'card';

        randomMealEl.innerHTML = "<span style='font-size:16px; font-weight:bold; padding-bottom:4px'>" + data.recipes[position].title +
            "</span>" + "<br />" + "<img src=\"" + data.recipes[position].image + "\">" + "<br />" +
            "Preparation Time: " + data.recipes[position].readyInMinutes + " Minutes" + "<br />" + "Number of Servings: "
            + data.recipes[position].servings + "<br />" + "<a class='link' target='_blank' href=" + data.recipes[position].sourceUrl + ">Go To Recipe!</a>";


        randomMealInputEl.appendChild(randomMealEl);

    }

};


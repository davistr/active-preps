

var bmiFormEl = document.querySelector("#bmi-form");


var convertHeight = function (heightInputEl, inchesInputEl) {

    var feet = (heightInputEl * 12);
    return (feet + inchesInputEl);
};


var getBMI = function (weight, height) {


    fetch("https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=" + weight + "&height=" + height, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "body-mass-index-bmi-calculator.p.rapidapi.com",
            "x-rapidapi-key": "a0c4d61318msh3af62e945a1311bp114257jsna58ed68645ac"
        }
    }).then(function (response) {
        console.log(response);
        response.json().then(function (data) {
            console.log(data);
        })
            .catch(function (error) {
                console.error(error);
            });
    });

};


var formSubmitHandler = function (event) {

    event.preventDefault();

    var heightInputEl = parseInt(document.getElementById("feet").value);
    var inchesInputEl = parseInt(document.getElementById("inches").value);
    var weightInputEl = parseInt(document.getElementById("weight").value);

    console.log(convertHeight(heightInputEl, inchesInputEl));
    console.log(weightInputEl);
    getBMI(weightInputEl, (convertHeight(heightInputEl, inchesInputEl)));


};



// event listener for button
bmiFormEl.addEventListener("submit", formSubmitHandler);
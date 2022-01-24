

var bmiFormEl = document.querySelector("#bmi-form");
var bmiEl = document.querySelector("#bmi");

// modal variables
var modalBgEl = document.querySelector(".modal-background");
var modalEl = document.querySelector(".modal");

// function to convert user input in feet/inches to inches
var convertHeight = function (heightInputEl, inchesInputEl) {

    var feet = (heightInputEl * 12);
    return (feet + inchesInputEl);
};


var getBMI = function (weight, height) {

    fetch("https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=" + weight + "&height=" + height, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "body-mass-index-bmi-calculator.p.rapidapi.com",
            "x-rapidapi-key": "1fa0c387fcmsh4b1e9b6737037f6p133d66jsna456832b5eb4"
        }
    }).then(function (response) {
        console.log(response);
        response.json().then(function (data) {
            console.log(data);
            displayBMI(data);

        })
            .catch(function (error) {
                console.error(error);
            });
    });
};


// display BMI
var displayBMI = function (data) {

    document.getElementById('bmi').innerHTML = "Your BMI is:  " + Math.round((data.bmi + Number.EPSILON) * 100) / 100;
    bmiEl.setAttribute('style', 'margin-bottom:20px; padding: 6px; font-size: 26px; font-weight: bolder;')
};


var formSubmitHandler = function (event) {

    event.preventDefault();

    var heightInputEl = parseInt(document.getElementById("feet").value);
    var inchesInputEl = parseInt(document.getElementById("inches").value);
    var weightInputEl = parseInt(document.getElementById("weight").value);

    console.log(convertHeight(heightInputEl, inchesInputEl));
    console.log(weightInputEl);
    getBMI(weightInputEl, (convertHeight(heightInputEl, inchesInputEl)));


    // enable modal on form submit
    modalEl.classList.add('is-active');

    // hide modal on click outside of modal
    modalBgEl.addEventListener('click', () => {
        modalEl.classList.remove('is-active');
    });

};


// // event listener for button
bmiFormEl.addEventListener("submit", formSubmitHandler);




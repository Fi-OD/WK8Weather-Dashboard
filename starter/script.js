let APIKey = "ba823d5a80f10453e7778591d8088004";



//let queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + APIKey;


// this function captures the inputted name and stores it in a variable


let inputField =document.querySelector("#search-input")
let cityName = {};

let searchBtn = document.querySelector("#search-button");
searchBtn.addEventListener("click",function(event){
    event.preventDefault();
    cityName = inputField.value;
    console.log(cityName);

    localStorage.setItem("userInput",cityName)
    localStorage.getItem("userInput")



// this code takes the inputted city name and extracts the data from the API for the associated city

let queryURL =  "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey + "&units=metric"


fetch(queryURL)
.then(response => response.json())
.then(function(cityInfo){


let cityName = cityInfo.name
let cityLatitude = cityInfo.coord.lat;
let cityLongitude = cityInfo.coord.lon;
let cityTemp =  cityInfo.main.temp;
let cityHumidity = cityInfo.main.humidity;
let cityWind = cityInfo.wind.speed;

console.log(cityInfo)
console.log(cityName)
console.log(cityLatitude)
console.log(cityLongitude)
console.log(cityTemp)
console.log(cityHumidity)
console.log(cityWind)

// this code call the five day forecast for the searched city

let foreCastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityInfo.coord.lat}&lon=${cityInfo.coord.lon}&appid=` + APIKey;

return fetch (foreCastURL)
})

.then(response => response.json())
.then(function(fiveDayForecast){

    console.log(fiveDayForecast)
})



});

//this code uses the 5 day forecast API

//day 1

// adds one day to the current date
let dayOneDate = moment().add(1,"days").format("MM/D/YYYY");
console.log(dayOneDate)

let dayOneTemp
let dayOneHumidity
let dayOneTemperature

//day 2

//day 3

//day 4

//day 5




// displays the current date
let currentDay = moment().format("MM/D/YYYY")
console.log(currentDay)



//pull the weather data for the searched city based on geographical coordinates


//display todays weather hook into #today



// Display previous searches in buttons


// when the buttons are clicked display the current weather and 5 day forecast




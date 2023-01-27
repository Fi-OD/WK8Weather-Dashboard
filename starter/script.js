let APIKey = "ba823d5a80f10453e7778591d8088004"
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

//let queryURL =  "https://api.openweathermap.org/data/2.5/weather?q=paris&appid=" + APIKey
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

})

});

//this code uses the 5 day forecast API

console.log(APIKey)
let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=london&appid=" + APIKey;

console.log(cityName)
fetch(queryURL)
.then(response => response.json())
.then(function(fiveDayForecast){

    console.log(fiveDayForecast)

//day 1

// use moment 
let dayOneDate = moment().add(1,"days").format("MM/D/YYYY");
console.log(dayOneDate)
let dayOneTemp
let dayOneHumidity
let dayOneTemperature

//day 2

//day 3

//day 4

//day 5

})


// displays the current date
let currentDay = moment().format("MM/D/YYYY")
console.log(currentDay)



// console logs the array that hold the weather information for the selected city    


//input city name  


//on search button click convert city name into geographical coordinates 

//console.log("click")



//pull the weather data for the searched city based on geographical coordinates


//display todays weather hook into #today

/*The city name
The date
An icon representation of weather conditions
The temperature
The humidity
The wind speed*/


//the five day forecast - hook into #forecast

/*The date
an icon representation of weather conditions
the temperature
the humidity */

// Display previous searches in buttons


// when the buttons are clicked display the current weather and 5 day forecast




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



// this code takes the cityName variable and adds it to the API Query URL

//let queryURL =  "https://api.openweathermap.org/data/2.5/weather?q=paris&appid=" + APIKey
let queryURL =  "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey + "&units=metric"


fetch(queryURL)
.then(response => response.json())
.then(function(cityInfo){
//console.log(cityInfo.main.temp);
//console.log(cityInfo.main.humidity);
//console.log(cityInfo.wind.speed);
//console.log(cityInfo.coord.lat);
//console.log(cityInfo.coord.lon);

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




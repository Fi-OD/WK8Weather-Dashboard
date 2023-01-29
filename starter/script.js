let APIKey = "ba823d5a80f10453e7778591d8088004";
// displays the current date
let currentDay = moment().format("MM/D/YYYY")
// this function captures the inputted name and stores it in a variable
let cityTitle = "";
let todayTemp = "";
let todayWind = "";
let todayHumidity = "";


let inputField =document.querySelector("#search-input")
let cityName = "";

let searchBtn = document.querySelector("#search-button");
searchBtn.addEventListener("click",function(event){
    //event.clearVariable();
    event.preventDefault();
    cityName = inputField.value;
    console.log(cityName);

    localStorage.setItem("userInput",cityName)
   // localStorage.getItem("userInput")



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
let cityWeatherIconCode = cityInfo.weather[0].icon;

console.log(cityInfo)
console.log(cityName)
console.log(cityLatitude)
console.log(cityLongitude)
console.log(cityTemp)
console.log(cityHumidity)
console.log(cityWind)
console.log(cityWeatherIconCode)




//this code puts the city information into the HTML - however it need to be cleared when the search button is hit again


cityTitle = document.querySelector("#city");
cityTitle.innerHTML += cityName + "  (" + currentDay + ")";
todayTemp = document.querySelector("#todayTemp");
todayTemp.innerHTML += cityTemp + " °C";
todayWind = document.querySelector("#todayWind");
todayWind.innerHTML += cityWind +" KPH";
todayHumidity = document.querySelector("#todayHumidity");
todayHumidity.innerHTML += cityHumidity + " %";

// this code adds the current weather icon to the summary page

let iconContainer = document.querySelector("#icon");
let icon = document.createElement("img");
icon.src = `http://openweathermap.org/img/wn/`+ cityWeatherIconCode +`@2x.png`
iconContainer.appendChild(icon);


// this code calls the five day forecast for the searched city

//Once you find the data.list.dt -Make a for loop and iterate over the dt values within list 
//but do i += 8, instead of I++ since the time stamps must be every 7 to show the 5-day correctly, 
//instead of every 3 hours like the API default.  Hope that helps!


let foreCastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityInfo.coord.lat}&lon=${cityInfo.coord.lon}&appid=` + APIKey;

return fetch (foreCastURL)
})

.then(response => response.json())
.then(function(fiveDayForecast){

    console.log(fiveDayForecast)
})

;
//generate a historical search button - this does not work

let historicalButton = document.createElement("button");
historicalButton.innerHTML = "#history";
historicalButton.onclick = function(){
console.log("clicked")

let listGroup =document.querySelector("list-group")[0];

listGroup.appendChild(historicalButton);

}


});



//day 1

// adds one day to the current date
let dayOneDate = document.querySelector("#dayOneDate")
dayOneDate.innerHTML += moment().add(1,"days").format("MM/D/YYYY");


let dayOneTemp
let dayOneHumidity
let dayOneTemperature

//day 2
let dayTwoDate = document.querySelector("#dayTwoDate")
dayTwoDate.innerHTML += moment().add(2,"days").format("MM/D/YYYY")

//day 3
let dayThreeDate = document.querySelector("#dayThreeDate")
dayThreeDate.innerHTML += moment().add(3,"days").format("MM/D/YYYY")

//day 4
let dayFourDate = document.querySelector("#dayFourDate")
dayFourDate.innerHTML += moment().add(4,"days").format("MM/D/YYYY")

//day 5
let dayFiveDate = document.querySelector("#dayFiveDate")
dayFiveDate.innerHTML += moment().add(5,"days").format("MM/D/YYYY")








//pull the weather data for the searched city based on geographical coordinates


//display todays weather hook into #today



// Display previous searches in buttons


// when the buttons are clicked display the current weather and 5 day forecast




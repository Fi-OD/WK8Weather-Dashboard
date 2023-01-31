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
      
 
let cityName = "";
let cityLatitude = "";
let cityLongitude = "";
let cityTemp =  "";
let cityHumidity = "";
let cityWind = "";
let cityWeatherIconCode = "";    


cityName = cityInfo.name
cityLatitude = cityInfo.coord.lat;
cityLongitude = cityInfo.coord.lon;
cityTemp =  cityInfo.main.temp;
cityHumidity = cityInfo.main.humidity;
cityWind = cityInfo.wind.speed;
cityWeatherIconCode = cityInfo.weather[0].icon;

console.log(cityInfo)
console.log(cityName)
console.log(cityLatitude)
console.log(cityLongitude)
console.log(cityTemp)
console.log(cityHumidity)
console.log(cityWind)
console.log(cityWeatherIconCode)


//this code puts the city information into the HTML 


cityTitle = document.querySelector("#city");
cityTitle.innerHTML = cityName + "  (" + currentDay + ")";
todayTemp = document.querySelector("#todayTemp");
todayTemp.innerHTML = "Temp: " + cityTemp + " °C";
todayWind = document.querySelector("#todayWind");
todayWind.innerHTML = "Wind: " + cityWind +" KPH";
todayHumidity = document.querySelector("#todayHumidity");
todayHumidity.innerHTML = "Humidity:" + cityHumidity + " %";

// this code adds the current weather icon to the summary page

let icon ="";
let iconContainer = document.querySelector("#icon");
icon = document.createElement("img");
icon.src = `http://openweathermap.org/img/wn/`+ cityWeatherIconCode +`@2x.png`
iconContainer.appendChild(icon);


// this code calls the five day forecast for the searched city


let foreCastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityInfo.coord.lat}&lon=${cityInfo.coord.lon}&appid=` + APIKey + "&units=metric";

return fetch (foreCastURL)
})

.then(response => response.json())
.then(function(fiveDayForecast){

    console.log(fiveDayForecast)

//day 1

// adds one day to the current date
let dayOneDate = document.querySelector("#dayOneDate")
dayOneDate.innerHTML += moment().add(1,"days").format("MM/D/YYYY");


let dayOneTemp = fiveDayForecast.list[0].main.temp
let postDayOneTemp = document.querySelector("#dayOneTemp");
postDayOneTemp.innerHTML = "Temp: " + dayOneTemp + " °C";
console.log(dayOneTemp)

let dayOneWind = fiveDayForecast.list[0].wind.speed;
let postDayOneWind = document.querySelector("#dayOneWind")
postDayOneWind.innerHTML = "Wind: " + dayOneWind + " KPH";
console.log(dayOneWind)

let dayOneHumidity = fiveDayForecast.list[0].main.humidity
let postDayOneHumidity = document.querySelector("#dayOneHumidity")
postDayOneHumidity.innerHTML = "Humidity: " + dayOneHumidity + "  %";
console.log(dayOneHumidity)

let dayOneIconCode = fiveDayForecast.list[0].weather[0].icon;
let dayOneIconContainer = document.querySelector("#dayOneIcon");
let dayOneIcon = document.createElement("img");
dayOneIcon.src = `http://openweathermap.org/img/wn/`+ dayOneIconCode +`@2x.png`
dayOneIconContainer.appendChild(dayOneIcon);

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










// Display previous searches in buttons


// when the buttons are clicked display the current weather and 5 day forecast




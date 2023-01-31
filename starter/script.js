let APIKey = "ba823d5a80f10453e7778591d8088004";
// displays the current date
let currentDay = moment().format("MM/D/YYYY")


// this function captures the inputted name and stores it in a variable

let inputField =document.querySelector("#search-input")
let cityName = "";
let searchBtn = document.querySelector("#search-button");
searchBtn.addEventListener("click",function(event){
    event.preventDefault();
    cityName = inputField.value;
    console.log(cityName);
    localStorage.setItem("userInput",cityName)
// localStorage.getItem("userInput")

// this code is supposed to remove all the img's in the images variable by making the value of the variable [0]    
    let images = document.querySelectorAll("img");
    console.log(images)
    if (images.length > 0 ){
     images.length = 0;
     }

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
// the below code should be in a loop.


let unixTimeStamp =fiveDayForecast.list[0].dt;
let dayOneDate = moment.unix(unixTimeStamp).format("MM/D/YYYY")
console.log(dayOneDate);
let postOneDate = document.querySelector("#dayOneDate");
postOneDate.innerHTML = dayOneDate;

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
let unixTimeStampDay2 =fiveDayForecast.list[8].dt;
let dayTwoDate = moment.unix(unixTimeStampDay2).format("MM/D/YYYY")
console.log(dayTwoDate);
let postTwoDate = document.querySelector("#dayTwoDate");
postTwoDate.innerHTML = dayTwoDate;

let dayTwoTemp = fiveDayForecast.list[8].main.temp
let postDayTwoTemp = document.querySelector("#dayTwoTemp");
postDayTwoTemp.innerHTML = "Temp: " + dayTwoTemp + " °C";
console.log(dayTwoTemp)

let dayTwoWind = fiveDayForecast.list[8].wind.speed;
let postDayTwoWind = document.querySelector("#dayTwoWind")
postDayTwoWind.innerHTML = "Wind: " + dayTwoWind + " KPH";
console.log(dayTwoWind)

let dayTwoHumidity = fiveDayForecast.list[8].main.humidity
let postDayTwoHumidity = document.querySelector("#dayTwoHumidity")
postDayTwoHumidity.innerHTML = "Humidity: " + dayTwoHumidity + "  %";
console.log(dayTwoHumidity)

let dayTwoIconCode = fiveDayForecast.list[8].weather[0].icon;
let dayTwoIconContainer = document.querySelector("#dayTwoIcon");
let dayTwoIcon = document.createElement("img");
dayTwoIcon.src = `http://openweathermap.org/img/wn/`+ dayTwoIconCode +`@2x.png`
dayTwoIconContainer.appendChild(dayTwoIcon);

//day 3
let unixTimeStampDay3 =fiveDayForecast.list[16].dt;
let dayThreeDate = moment.unix(unixTimeStampDay3).format("MM/D/YYYY")
console.log(dayThreeDate);
let postThreeDate = document.querySelector("#dayThreeDate");
postThreeDate.innerHTML = dayThreeDate;


let dayThreeTemp = fiveDayForecast.list[16].main.temp
let postDayThreeTemp = document.querySelector("#dayThreeTemp");
postDayThreeTemp.innerHTML = "Temp: " + dayThreeTemp + " °C";
console.log(dayThreeTemp)

let dayThreeWind = fiveDayForecast.list[16].wind.speed;
let postDayThreeWind = document.querySelector("#dayThreeWind")
postDayThreeWind.innerHTML = "Wind: " + dayThreeWind + " KPH";
console.log(dayThreeWind)

let dayThreeHumidity = fiveDayForecast.list[16].main.humidity
let postDayThreeHumidity = document.querySelector("#dayThreeHumidity")
postDayThreeHumidity.innerHTML = "Humidity: " + dayThreeHumidity + "  %";
console.log(dayThreeHumidity)

let dayThreeIconCode = fiveDayForecast.list[16].weather[0].icon;
let dayThreeIconContainer = document.querySelector("#dayThreeIcon");
let dayThreeIcon = document.createElement("img");
dayThreeIcon.src = `http://openweathermap.org/img/wn/`+ dayThreeIconCode +`@2x.png`
dayThreeIconContainer.appendChild(dayThreeIcon);

//day 4
let unixTimeStampDay4 =fiveDayForecast.list[24].dt;
let dayFourDate = moment.unix(unixTimeStampDay4).format("MM/D/YYYY")
console.log(dayFourDate);
let postFourDate = document.querySelector("#dayFourDate");
postFourDate.innerHTML = dayFourDate;

let dayFourTemp = fiveDayForecast.list[24].main.temp
let postDayFourTemp = document.querySelector("#dayFourTemp");
postDayFourTemp.innerHTML = "Temp: " + dayFourTemp + " °C";
console.log(dayFourTemp)

let dayFourWind = fiveDayForecast.list[24].wind.speed;
let postDayFourWind = document.querySelector("#dayFourWind")
postDayFourWind.innerHTML = "Wind: " + dayFourWind + " KPH";
console.log(dayFourWind)

let dayFourHumidity = fiveDayForecast.list[24].main.humidity
let postDayFourHumidity = document.querySelector("#dayFourHumidity")
postDayFourHumidity.innerHTML = "Humidity: " + dayFourHumidity + "  %";
console.log(dayFourHumidity)

let dayFourIconCode = fiveDayForecast.list[24].weather[0].icon;
let dayFourIconContainer = document.querySelector("#dayFourIcon");
let dayFourIcon = document.createElement("img");
dayFourIcon.src = `http://openweathermap.org/img/wn/`+ dayFourIconCode +`@2x.png`
dayFourIconContainer.appendChild(dayFourIcon);

//day 5
let unixTimeStampDay5 =fiveDayForecast.list[32].dt;
let dayFiveDate = moment.unix(unixTimeStampDay5).format("MM/D/YYYY")
console.log(dayFiveDate);
let postFiveDate = document.querySelector("#dayFiveDate");
postFiveDate.innerHTML = dayFiveDate;

let dayFiveTemp = fiveDayForecast.list[32].main.temp
let postDayFiveTemp = document.querySelector("#dayFiveTemp");
postDayFiveTemp.innerHTML = "Temp: " + dayFiveTemp + " °C";
console.log(dayFiveTemp)

let dayFiveWind = fiveDayForecast.list[32].wind.speed;
let postDayFiveWind = document.querySelector("#dayFiveWind")
postDayFiveWind.innerHTML = "Wind: " + dayFiveWind + " KPH";
console.log(dayFiveWind)

let dayFiveHumidity = fiveDayForecast.list[32].main.humidity
let postDayFiveHumidity = document.querySelector("#dayFiveHumidity")
postDayFiveHumidity.innerHTML = "Humidity: " + dayFiveHumidity + "  %";
console.log(dayFiveHumidity)

let dayFiveIconCode = fiveDayForecast.list[32].weather[0].icon;
let dayFiveIconContainer = document.querySelector("#dayFiveIcon");
let dayFiveIcon = document.createElement("img");
dayFiveIcon.src = `http://openweathermap.org/img/wn/`+ dayFiveIconCode +`@2x.png`
dayFiveIconContainer.appendChild(dayFiveIcon);







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




const weatherUrl="https://api.weather.gov/gridpoints/MPX/166,72/forecast"
const weatherTable = document.getElementById("weather-forecast")

fetch(weatherUrl)
    .then( response => response.json())
    .then( weatherJson => {
        displayWeatherTable(weatherJson)
    })
    .catch( error => {
        console.log(error)
        alert("Sorry, weather failure.")
    })

    function displayWeatherTable(weatherJson) {
        console.log(weatherJson)
        const forecastPeriodArray=weatherJson.properties.periods
        forecastPeriodArray.forEach( forecastPeriodData => {
            
            let tableRow = document.createElement("tr")

            console.log(forecastPeriodData)
            let periodName = forecastPeriodData.name
            console.log(periodName)
            // Retrieve and add periodName 
            let periodNameTableData = document.createElement("td")
            if (periodName.slice(-5).toLowerCase()==="night") {
            periodNameTableData.classList.add("text-end")
            tableRow.style.backgroundColor = "#989999";
            }
            periodNameTableData.style.width = "20ch"
            periodNameTableData.style.whiteSpace = "nowrap"
            periodNameTableData.innerHTML = periodName
            tableRow.appendChild(periodNameTableData)

            // Retrieve and add temperature 
            let temperature = forecastPeriodData.temperature
            let temperatureUnit = forecastPeriodData.temperatureUnit
            let temperatureTableData = document.createElement("td")
            temperatureTableData.classList.add("text-center");  
            temperatureTableData.innerHTML = temperature+temperatureUnit
            tableRow.appendChild(temperatureTableData)

            // Retrieve and add wind 
            let wind = forecastPeriodData.windSpeed
            let windDirect = forecastPeriodData.windDirection
            let windTableData = document.createElement("td")
            windTableData.innerHTML = wind+" "+windDirect
            tableRow.appendChild(windTableData)

            // Retrieve and add icons 
            let weatherIcon = forecastPeriodData.icon
            let weatherIconTableData = document.createElement("td")
            let weatherIconImage = document.createElement("img")
            weatherIconImage.src = weatherIcon
            weatherIconTableData.appendChild(weatherIconImage)
            tableRow.appendChild(weatherIconTableData)




            let details = forecastPeriodData.detailedForecast
            let detailsTableData = document.createElement("td")
            detailsTableData.style.width = "40ch";
            detailsTableData.style.maxWidth = "40ch";
            detailsTableData.style.whiteSpace = "normal";      // allow wrapping
            detailsTableData.style.overflowWrap = "anywhere";  // break long chunks if needed
            detailsTableData.innerHTML = details
            tableRow.appendChild(detailsTableData)




            weatherTable.appendChild(tableRow)
        })
    }
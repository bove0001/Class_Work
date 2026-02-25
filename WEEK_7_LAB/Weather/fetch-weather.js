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
            periodNameTableData.innerHTML = periodName
            tableRow.appendChild(periodNameTableData)

            // Retrieve and add temperature 
            let temperature = forecastPeriodData.temperature
            let temperatureUnit = forecastPeriodData.temperatureUnit
            let temperatureTableData = document.createElement("td")
            temperatureTableData.innerHTML = temperature+temperatureUnit
            tableRow.appendChild(temperatureTableData)

            // Retrieve and add temperature 
            let weatherIcon = forecastPeriodData.icon
            let weatherIconTableData = document.createElement("td")
            let weatherIconImage = document.createElement("img")
            weatherIconImage.src = weatherIcon
            weatherIconTableData.appendChild(weatherIconImage)
            tableRow.appendChild(weatherIconTableData)


            let details = forecastPeriodData.detailedForecast
            let detailsTableData = document.createElement("td")
            detailsTableData.innerHTML = details
            tableRow.appendChild(detailsTableData)




            weatherTable.appendChild(tableRow)
        })
    }
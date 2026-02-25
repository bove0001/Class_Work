let apodTitle = document.getElementById("apod-title")
let apodDiscription = document.getElementById("apod-discription")
let apodImage = document.getElementById("apod-image")
let apodVideo = document.getElementById("apod-video")

let apodApiUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"

fetch(apodApiUrl) // returns a Promise
    .then( response => {
        return response.json()
    }) // function os called if it is OK
    .then( data => {
        console.log(data)
    })

    .catch( error => {
        console.log(error)
        alert()
        apodDiscription.innerHTML="Sorry, error!!!"
    } ) // called is error

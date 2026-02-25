let apodTitle = document.getElementById("apod-title")
let apodDiscription = document.getElementById("apod-discription")
let apodImage = document.getElementById("apod-image")
let apodVideo = document.getElementById("apod-video")

let apodApiUrl = "https://api.nasa.gov/planetary/apod?api_key=4znWLsjZMKLtSxbCzmBPIQmA0pcSyTNg4TRPU61u"

fetch(apodApiUrl) // returns a Promise
    .then( response => {
        return response.json()
    }) // function os called if it is OK
    .then( data => {
        alert("APOD Info:" + JSON.stringify(data, null, 5));
        console.log(data)
        apodTitle.innerHTML = data.title 
        apodDiscription.innerHTML= data.explanation
        if (data.media_type === "image") {
            apodImage.src = data.url 
            apodImage.computedStyleMap.display="block"
        }
        if (data.media_type === "video") {
            apodVideo.src = data.url
            apodVideo.style.display = "block"
        }
        else {
            alert("Unknown media type!")
        }
    })

    .catch( error => {
        console.log(error)
        alert(JSON.stringify(error, null, 5));
        apodDiscription.innerHTML="Sorry, error!!!"
    } ) // called is error



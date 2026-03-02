function shout(text) {
    let shout_text=text.toUpperCase()+"!!!"
    return shout_text
    }

console.log(shout("Hello World"))
let message=shout("Hello programmers, w00t")
console.log(message)

function ftoc(fDegrees, decPlaces) {
    let cDegrees=(fDegrees-32)*5/9
    return cDegrees.toFixed(decPlaces)
    }

let fTemp=55
let cTemp=ftoc(fTemp)
console.log("Temp is "+cTemp+" C degrees")
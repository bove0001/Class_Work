function cityState(city, state){
    return(`${city}, ${state.toUpperCase()}`)
    //return(tempText)
}

console.log(cityState("Minneapolis","mn"))
let otherCity = "Seatle"
let otherState = "wA"
console.log(cityState(otherCity,otherState))

let className = "Web Programming"
let classCode= 2560
let classDepartment = "ITEC"

console.log(`This class is ${classDepartment} ${classCode} ${className}.`)
function checkGPA(GPA){
    if (GPA >= 0 && GPA <= 4) {
        return true
    } else {
        return false
    }
}

console.log(checkGPA(-1))
console.log(checkGPA(0))
console.log(checkGPA(2.5))
console.log(checkGPA(4))
console.log(checkGPA(4.5))

let age=35
let timeUSresident=35
let stateResident="Wisconsin"
let stateRepresentative="Wisconsin"

if (age >= 30 && timeUSresident >= 9 && stateRepresentative==stateResident) {
    console.log(`You are eligable to represent ${stateRepresentative}.`)
} else {
    console.log(`You are NOT eligable to represent ${stateRepresentative}.`)  
}
let animalArray= ["ant","bear","cheetah","deer"]
animalArray.forEach(function(singleAnimal){
    console.log(singleAnimal.length)
})
console.log(animalArray)
animalArray.push("Emu")
console.log(animalArray)

let animalLenArray=[]
animalArray.forEach(function(singleAnimal){
    animalLenArray.push(singleAnimal.length)
})
console.log(animalLenArray)
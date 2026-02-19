let user = {
    username:"JoE", 
    password:"P455w0rd", 
    email:"joe.bove@gmail.com", 
    role:["power_user","admin"], 
    contact:{
        phone:"(612) 555-5555", 
        office:"221B"
        }, 
    }
console.log(user.username)
console.log(user["username"])

user.salery="$1000000"
user.role.push("billing")
user.contact.city="Minneapolis"

console.log(user)
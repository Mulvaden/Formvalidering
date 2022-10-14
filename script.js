/* const randomNumbers = [ ];
for (let i = 0; i < randomNumbers.length; i++) {
    alert(i);
    
}/*
document.getElementById("numbers").innerHTML = 
Math.floor(Math.random() * 100); */

var min = 1
var max = 100
const randomNumbers = [ ];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * (max - min + 1)));
    if(!randomNumbers.indexOf(i) === 1) randomNumbers.push(i);
  } randomNumbers.sort();

document.getElementById("numbers").innerHTML = randomNumbers;


//for loop som kör tills Array är 10
//om randomNumbers inte finns i Array
//lägg till randomNumbers i Array med push


const validera = () => {
    let user = document.getElementById("user").value;
    console.log("Username: " + user);
}

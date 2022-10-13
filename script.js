/* const randomNumbers = [ ];
for (let i = 0; i < randomNumbers.length; i++) {
    alert(i);
    
}/*
document.getElementById("numbers").innerHTML = 
Math.floor(Math.random() * 100); */

const randomNumbers = [ ];
for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
    if(randomNumbers.indexOf(i) === -1) randomNumbers.push(i);
  }
document.getElementById("numbers").innerHTML = randomNumbers;


//for loop som kör tills Array är 10
//om randomNumbers inte finns i Array
//lägg till randomNumbers i Array med push


const validera = () => {
    let user = document.getElementById("user").value;
    alert(user);
}
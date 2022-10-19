var randomNumbers = [ ];
while(randomNumbers.length < 10){
    var i = Math.floor(Math.random()* 100) + 1;
    if(randomNumbers.indexOf(i) === -1) randomNumbers.push(i);
}randomNumbers.sort((a, b) => a - b);
document.getElementById("numbers").innerHTML = randomNumbers;





const validera = () => {
    let user = document.getElementById("user").value;
    console.log("Username: " + user);
}


function checkPassword()
{
    var password = document.getElementById('password');
    var repassword = document.getElementById('repassword');
    var message = document.getElementById('error');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
 	
    if(password.value.length > 5)
    {
        password.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "character number ok!"
    }
    else
    {
        password.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " you have to enter at least 6 digit!"
        return;
    }
  
    if(password.value == repassword.value)
    {
        repassword.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "ok!"
    }
	else
    {
        repassword.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " These passwords don't match"
    }
}  
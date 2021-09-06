function divideBy() 
{ 
       num1 = document.getElementById("firstNumber").value;
       num2 = document.getElementById("secondNumber").value;
result = ((num2 - num1) / (num1))*100;
document.getElementById("result").innerHTML = result + "%"
}
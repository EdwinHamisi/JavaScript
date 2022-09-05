var age =parseInt(prompt("Please Enter Your Age"));
if (age>=18 && age<=120){
    alert("You can proceed & vote");
}
else if( age>=1 && age <=17){
    alert("You are too young please go home");
}
else{
    alert("invalid age entered");
}
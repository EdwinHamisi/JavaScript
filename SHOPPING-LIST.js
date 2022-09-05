const cost=parseInt(prompt("please enter the cost of items"));

if(cost>=7000){
    const amountTopay =cost * 0.85
alert("Discount allowed of 15%" + "amount you will pay ksh." + amountTopay);
}
else if(cost>=5000 && cost<7000){
    const amountTopay=cost * 0.90
    alert("Discount allowed of 10%" + "amount you will pay ksh." + amountTopay);
}
else if(cost>=3000 && cost<5000){
    const amountTopay=cost  *  0.95
alert("Discount allowed of 5%" + "amount you will pay ksh." + amountTopay);
}
 else{
    alert("No discount");
}
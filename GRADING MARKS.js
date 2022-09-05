var grade;
var cat =parseInt(prompt("please enter the Score Cat Marks"));
if(cat>=1 && cat<=30){
   alert("Display  marks  entered");
}
else{
    alert("invalid");
}
var finalmarks =parseInt(prompt("please enter the  final Score  Marks"));
if(cat>=1 && cat<=70){
   alert("Display  marks entered");
}
else{
    alert("invalid");
    
}
grade=cat+finalmarks;
if(grade>=80 && grade<=100){
  alert("Distinction");
}
if(grade>=60&& grade<=79){
   alert("Credit");
}

if(grade>=40 && grade<=59){
   alert("Pass");
}

if(grade>=0 && grade<=39){
    alert("Fail");
}
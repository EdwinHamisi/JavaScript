var stdGrading=[];
for(i=1; i<=3; i++){ 
var stdName=parseInt(prompt("Enter the stdname:"));
var stdscore=parseInt(prompt("Enter the stdscore:"));

if(stdscore>=0&&stdscore<=100){
    stdGrading.push([stdName,stdscore]);

}
else{
    alert("wrong marks entered");
}
}
var sortedGrading=stdGrading.sort();
alert(sortedGrading);
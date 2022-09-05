/*class Animal
    {
    speak(){
    console.log("Animals have different sounds");}
    }
    class Cow extends Animal
    { 
    speak(){
    console.log(" Cow says moow moow");}
    }
    class Donkey extends Animal
    { 
    speak(){
    console.log("Donkey says hoog hoog");}
    } 
var x =[new Cow(),new Donkey()]
x.forEach(function(info){
info.speak();});*/

function showscreen(){
    console.log('1.showing the screen appearance');
 }
function hiddenscreen(){
    console.log('4.screen appearance hidden');
 }
function retrievalDataDB(callback){
   setTimeout(()=>{
    console.log('3.finished retrieval of Data from the database');
    callback();
 },2000)
 console.log('2.start retrieval of Data from the database');
}
 showscreen();
 retrievalDataDB(hiddenscreen);
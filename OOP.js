/*var Student1={
    name:'Edwin',
    email: 'edwinn@gmail.com',

    login(){
        console.log(this.name, 'Has logged in...');
    },

    logout(){
        console.log(this.name, 'Has logged out...');
    }
};*/

/*class  Student{
    constructor(name = 'kim', email = 'kim@gmail.com'){
        this.name = name;
        this.email = email;
    }
    login(){
        console.log(this.name, "has logged in..");
        return this;
    }
    logout(){
        console.log(this.email, "has logged out..");
        return this;
    }

}
var student1 = new Student('Edwin', 'edwin@gmail.com');
student1.login().logout();
var student2 = new Student('John', 'john@gmail.com');
var student3 = new Student();*/

/*class  Student{
    constructor(name = 'kim', email = 'kim@gmail.com'){
        this.name = name;
        this.email = email;
    }
    login(){
        console.log(this.name, "has logged in..");
        return this;
    }
    logout(){
        console.log(this.email, "has logged out..");
        return this;
    }

}*/

class Student{ 
    show(grade){
    if(grade>=70&&grade<=100)
    console.log( 'A');
    }
    show(grade){
    if(grade>=60&&grade<=69)
    console.log( 'B');
    } 
    show(grade){
    if(grade>=50&&grade<=59)
    console.log( 'C');
    }
    show(grade){
    if(grade>=40&&grade<=49)
    console.log( 'D');
    }show(grade){
    if(grade>=0&&grade<=39)
    console.log( 'Fail');
    }}
const student= new Student().show(70);
console.log(student);
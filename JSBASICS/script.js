/*
//decision making
var age=18;
if (age<18){
    console.log("minor");
}else if (age >= 18){
    console.log("major");
}

//con?true:false
age>=18?console.log("major"):console.log("minor");

//function
function sachin(firstName,Lastname){
    console.log(firstName+' '+Lastname);
}
sachin('Deepti','Agarwal');

//array

var names=['sachin','Ankita','Avyaan'];
console.log(names[2]);
console.log(names.length);

names.push("Shrihaan");
names.unshift("Rajesh");
names.pop();
console.log(names);

//Objects

var myDetails = {
    firstName: 'Sachin',
    lastName: 'Srivastava',
    doB: 1980,
    family: ['sachin','ankita'],
    calcAge: function(birthYear){
        return 2019-birthYear;
    }
};

console.log(myDetails.firstName);
var z='doB';
console.log(myDetails[z]);

myDetails.doB=1981;
console.log(myDetails);

//new object

var shiva = new Object();
shiva.firstName='Deepti';
console.log(shiva);

//
console.log('Sachin is ' +myDetails.calcAge(1980)+' years old');
*/

//DOM Maipulation
//onmouseover 

/*
document.getElementById('btn').onmouseover = changeOnMouseOver;
document.getElementById('btn').onmouseout = changeOnMouseOut;

function changeOnMouseOver() {
    var but = document.getElementById('btn');
    but.style.background="red";

}
function changeOnMouseOut() {
    var but = document.getElementById('btn');
    but.style.background="blue";

}

//Using this keyword 
function changeOnMouseOver() {
    //var but = document.getElementById('btn');
    this.style.background="red";

}
function changeOnMouseOut() {
    //var but = document.getElementById('btn');
    this.style.background="blue";

}

document.getElementById('btn').onmouseover = function(){
    this.style.background="red";
}


document.getElementById('btn').onmouseout = function(){
    this.style.background="blue";

};

document.getElementById('btn').onclick = function(){
    alert("You Clicked on this Button");

};
*/
//addEvent listner example

var but = document.getElementById('btn');
but.addEventListener('mouseover',changeOnMouseOver);
but.addEventListener('mouseout',changeOnMouseOut);

function changeOnMouseOver() {
    //var but = document.getElementById('btn');
    this.style.background="red";

}
function changeOnMouseOut() {
    //var but = document.getElementById('btn');
    this.style.background="blue";

}
//querySelector method for manipulating dom 
document.querySelector('#hId').textContent="New Text";
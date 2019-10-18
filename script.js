function showData(){
    document.getElementById('dataBox').style.display = 'block';
}
function showCon(){
    document.getElementById('consultBox').style.display = 'block';
}
function showRep(){
    document.getElementById('reportBox').style.display = 'block';
}



var today = new Date();
var hour = today.getHours();
// var theHeader = document.getElementsByTagName('header');

// function borderTime(){
// if(hour > 18){
//     theHeader.style.borderColor="purple"
// } else if(hour > 12){
//     theHeader.style.borderColor="red"
// } else if (hour > 0){
//     theHeader.style.borderColor="orange"
// } else { theHeader.style.borderColor="black"
//     }
// };





function askName() { 
    var greeting;

    if(hour > 18) {
        greeting = 'Good evening!';
    } else if (hour > 12) {
        greeting = 'Good afternoon!';
    } else if (hour > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome';
    }
    var username = prompt('What is your name?');

    return '<h3>' + greeting + ' ' + username + '</h3>';
}

function getItem() {
    var order = prompt('Which do you need, consulting, data management, or reporting?')
    var item;
    if (order === 'consulting'){
        item = '<img src="images/consult.jpg">';
    } else if (order === 'data management'){
        item = '<img src="images/data-man.jpg">';
    } else if (order === 'reporting'){
        item = '<img src="images/report.jpg">';
    } else { 
        getItem();
    } return item;
    } 


var howMany = function (){
    var count = prompt('Awesome, how many meetings with us would you like per month?');
  
    while (count === '' || isNaN(count)){
      var count = prompt('PLEASE enter a number');
    }
  
    return count;
}

function showOrder(){
    var item = getItem();
    var total = howMany();
    var result = '';

    for(var i = 0; i < total; i++){
        result = result + '<p class = jsImg>' + item + '</p>';
    }
    return result;
}
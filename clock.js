var today = new Date();
var hour = today.getHours();
function borderTime(){

if(hour > 18){
    document.getElementsByTagName('header').style.borderColor = 'purple';
} else if(hour > 12){
    document.getElementsByTagName('header').style.borderColor = 'blue';
} else if (hour > 0){
    document.getElementsByTagName('header').style.borderColor = 'orange';
} else {
    document.getElementsByTagName('header').style.borderColor = 'red';
}
}
borderTime();


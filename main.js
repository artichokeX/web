const cl  = console.log;
cl('Hello world');
//console is Variable.
var time = new Date();

function timeToday() {
    var container = document.getElementById('dates');
    return container.innerHTML ='<strong>Todays Date: </strong> ' 
    + time.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
}
timeToday();
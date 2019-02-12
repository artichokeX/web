
/*var time = new Date();
function timeToday() {
    var container = document.getElementById('dates');
    return container.innerHTML ='<strong>Todays Date: </strong> ' 
    + time.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
}
timeToday();*/ // Uneeded script for time at this moment
function myDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("menu").classList.toggle("animate");
} // Dropdown menu
// I have added 2 event handlers to the opening button tag in my index.html file. 
// The 2 functions below activate the event handlers when you hover the mouse over their element
function mOver(obj) {
    obj.innerHTML = "You know you want to - click me!"
}
  
  function mOut(obj) {
    obj.innerHTML = "YESSS!"
}


// This is an event listener which is being attached to the "yes" button element in the index.html file
// The event is activated when you click the button 
document.getElementById("yesbutton").addEventListener("click", myfunction);

function myfunction() {
    document.getElementById("demo").innerHTML = "I knew you wanted to. Click the button below!";
}
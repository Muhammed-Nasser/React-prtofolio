
//---- function to write job title char by char----//

var message = document.getElementById("message");
function writeMessage(string) {
    var i = 0, intervalId;
    intervalId = window.setInterval(function() {
        message.innerHTML += string.charAt(i++);
        if (i > string.length) 
        window.clearInterval(intervalId);
           
    }, 100);
  }
  writeMessage("Full Stack Web Developer")
window.setInterval(function(){
    message.innerHTML = "F" 
    writeMessage("ull Stack Web Developer");},3000)




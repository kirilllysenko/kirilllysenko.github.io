var i = 0;
var introText = "Lorem ipsum dummy text blabla.";
var introImage = "";
var speed = 50;

function printText() {
    if (i < introText.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(printText, speed);
    }
}

printText();
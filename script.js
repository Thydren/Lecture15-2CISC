let submitButton = document.getElementById("submitButton");
let textInput = document.getElementById("textInput");
let colorInput = document.getElementById("colorInput");
let form = document.querySelector("form");
form.addEventListener("submit", event => {
    let myColor = colorInput.value;
    event.preventDefault();
    console.log(textInput.value);
    console.log(colorInput.value);
    localStorage.setItem("color", myColor);
});

let color = localStorage.getItem("color");
if (color == null) {
    alert("Pick a color");
} else {
    console.log(color);
}
    


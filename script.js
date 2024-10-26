const buttons = document.querySelectorAll("button");
const paragraph = document.getElementById("paragraph");


function clickHandler() {
    const name = prompt("What is your name?");
    paragraph.innerText = `Hello, ${name}`;
}

for (const button of buttons) {
    button.addEventListener("click", clickHandler);
}
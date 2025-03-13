function togglemenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("show");
}
let count = 0;
let display = document.getElementById("display");
let savedDisplay = document.getElementById("saved-display");
savedDisplay.innerText = count;  // Show saved count

function countup() {
    count= count + 1;
    display.innerText = count;
    savedDisplay.innerText = count; // Update saved section
    localStorage.setItem("savedCount", count);
}
function reset() {
    count = 0;
    display.innerText = count;
    savedDisplay.innerText = count;
    localStorage.setItem("savedCount", count);
}

function save() {
    console.log(count);
}
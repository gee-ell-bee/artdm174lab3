// create table cell variables
let cellX = document.getElementById("xAxis");
let cellY = document.getElementById("yAxis");

// Event listener: when mouse moves, print values
document.addEventListener('mousemove', e => {
    // finding X & Y values
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    // print values
    cellX.innerText = e.clientX;
    cellY.innerText = e.clientY;
});

// create box actual height var
let boxWidth = document.querySelector(".mouse-log").clientWidth;
let main = document.getElementsByTagName("main");


// double check
console.log(boxWidth + "px", main);

// loop for applying new dimensions
for (let i = 0; i < main.length; i++) {
    main[i].style.gridAutoRows = `${boxWidth}px`;
}

// double check
console.log(window.innerHeight, boxWidth);

// function to change box width
function changeBoxWidth(Event) {
    for (let i = 0; i < main.length; i++) {
        boxWidth = document.querySelector(".mouse-log").clientWidth;
        main[i].style.gridAutoRows = `${boxWidth}px`;
        console.log(window.innerWidth, boxWidth);
    }
}

// event listener for changing box width
window.addEventListener("resize", changeBoxWidth);

/* boxes.forEach(applyWidth());

function applyWidth() {
    boxes.style.gridAutoRows = `${boxWidth}px`;
}*/


// previous code bits may want to save for later
/* const pics = ["images/pic1.jpg", "images/pic2.jpg"];
const frame = getElementById("picture-frame");
frame; */
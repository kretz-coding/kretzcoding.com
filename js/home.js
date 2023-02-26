var bubbles = document.getElementsByClassName("bubble");

var toggleSelected = function() {
    this.classList.toggle("selected");
    console.log("toggled");
};

for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].addEventListener('click', toggleSelected, false);
}

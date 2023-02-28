var bubbles = document.getElementsByClassName("bubble");

var toggleSelected = function() {
    this.classList.toggle("selected");
    console.log("toggled");
};

for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].addEventListener('click', toggleSelected, false);
<<<<<<< HEAD
}
=======
}
>>>>>>> 4bd7d2618aa9a0732394b12640ec95a7de173a91

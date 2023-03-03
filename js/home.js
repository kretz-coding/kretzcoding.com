const bubbles = document.getElementsByClassName("bubble");

let toggleSelected = function() {
    this.classList.toggle("selected");
};

for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].addEventListener('click', toggleSelected, false);
}

function test() {
    let selectedIssues = document.getElementsByClassName("bubble selected");
    
    for (let i = 0; i < selectedIssues.length; i++) {
        console.log (selectedIssues[i].innerText);
    }
}
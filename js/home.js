const bubbles = document.getElementsByClassName("bubble");

let toggleSelected = function() {
    this.classList.toggle("selected");
};

for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].addEventListener('click', toggleSelected, false);
}

function test() {
    let selectedIssues = document.getElementsByClassName("bubble selected");
    for (i = 0; i< selectedIssues.length; i++) {
        sessionStorage.setItem("Number of issues selected", selectedIssues.length);
        sessionStorage.setItem("User selected issue " + i.toString(), selectedIssues[i]);
    }
    
}
const triColors = ["#f7a20f", "#1b9dfa", "#d7e612"];

dynamicButton.addEventListener("click", () => {
    let clickCount = document.getElementById("clickCount").innerText;
    changeButtonColor(clickCount);
    document.getElementById("clickCount").innerText = ++clickCount;
});

function changeButtonColor(clickCount) {
    let dynamicButton = document.getElementById("dynamicButton");
    dynamicButton.style.backgroundColor = triColors[clickCount % 3];
}
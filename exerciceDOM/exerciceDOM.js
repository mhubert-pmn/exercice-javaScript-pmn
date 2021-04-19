const element = document.querySelector("button");
const text = ["ceci est un test", "lorem ipsum", "sailor chanty"]
const show = document.getElementById("showP");
function fillText() {return text[Math.floor(Math.random()*text.length)];}

function showTest() {
    let showCount = 0;
    setTimeout(() => { if (show.style.display === "block" && show.classList.contains("animation") && showCount === 1) {
        show.classList.remove("animation")
        document.getElementById("showP").innerHTML = fillText();
        showCount = 0;
    }}, 3500);

    if (show.style.display === "block") {
        
        show.classList.add("animation")
        showCount = 1;
        return
    }

    if (show.style.display = "none") {
        show.style.display = "block";
        show.innerHTML = fillText();
    }
    
}

function randomBackColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    };

element.addEventListener("click", function() {
    showTest()
    randomBackColor()
})

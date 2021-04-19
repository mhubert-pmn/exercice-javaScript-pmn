const element = $("button");
const text = ["ceci est un test", "lorem ipsum", "sailor chanty"]
const show = $( "p.text" );
function fillText() {return text[Math.floor(Math.random()*text.length)];}


function showTest() {
    let showCount = 0;
    setTimeout(() => { if ($(show).css("display") === "block" && show.hasClass("animation") && showCount === 1) {
        show.removeClass("animation")
        show.html(fillText())
        showCount = 0;
    }}, 3500);

    if ($(show).css("display") === "block") {
        show.addClass("animation")
        showCount = 1;
        return
    }

    if ($(show).css("display") === "none") {
        show.show();
        show.html(fillText());
    }
    
}

function randomBackColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    };

$("button").on("click", function() {
    showTest()
    randomBackColor()
})

/*DOM Events

addEventListener → add event
removeEventListener → remove event

Mouse Events:
click, dblclick, right click

Keyboard Events:
keydown, keyup */

let button = document.getElementById("btn")

//More mouse event:
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
button.addEventListener("click", () => {
    // alert("bUTTON IS CLICKED. yaHH!!")
    document.querySelector(".box").innerHTML = "<b>Yayy u were clicked.</b>Enjoy ur click..."
})

button.addEventListener("dblclick", () => {
    alert("bUTTON IS dbl_CLICKED. yaHH!!")
    // document.querySelector(".box").innerHTML = "<b>Yayy u were clicked.</b>Enjoy ur click..."
})

button.addEventListener("contextmenu", () => {
    alert("Dont right click. yaHH!!")
    // document.querySelector(".box").innerHTML = "<b>Yayy u were clicked.</b>Enjoy ur click..."
})


/*function handleRightClick(){
    alert("Dont right click. yaHH!!")
}

button.addEventListener("contextmenu", handleRightClick)

// remove
button.removeEventListener("contextmenu", handleRightClick)*/


button.addEventListener("keydown", (e) => {
    console.log(e)
})//it work when cursor in the button bcz event apply on button

document.addEventListener("keydown", (e) => {
    console.log(e.key, e.keyCode)
})//it work when cursor in anywhere  

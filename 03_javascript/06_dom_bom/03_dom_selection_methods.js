console.log("Riku")

let boxes = document.getElementsByClassName("box") //Returns HTMLCollection,Access elements using index ,Example: boxes[0], boxes[1]
// console.log(boxes)

boxes[3].style.backgroundColor = "green"
document.getElementById("redbox").style.backgroundColor = "Red" //Selects element by ID,Returns single element,Fastest method

document.querySelector(".box").style.backgroundColor = "yellow"; // first box that have .box [Returns first matching element,Uses CSS selectors,Example: .class, #id, tag]
// document.querySelectorAll(".box").style.backgroundColor = "pink"
console.log(document.querySelectorAll(".box"))// it return a node list or multiple nodes 

document.querySelectorAll(".box").forEach(e=>{ //Returns NodeList,Can use forEach loop
    // e.style.backgroundColor = "lightGreen"
    console.log(e)
})

console.log(document.getElementsByTagName("div"))
console.log(document.getElementsByName("div"))// searches element by name

e = document.getElementsByTagName("div")
console.log(e[4].matches("#redbox"))
console.log(e[3].matches("#redbox"))
console.log(e[3].closest(".container"))
console.log(document.querySelector(".container").contains(e[3]))
console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))
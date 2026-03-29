console.log(document.querySelector(".box")) //Used to create new HTML element

/*innerHTML → inside content
outerHTML → full element + content */
console.log(document.querySelector(".box").innerHTML) //'I am a box'
console.log(document.querySelector(".container").innerHTML) //'I am a box' [The innerHTML property allows to get the HTML inside the element ias a string→ Valid f]
console.log(document.querySelector(".container").outerHTML) //'I am a box' [The outer HTML property Contans the full HTML innertTML + the elentent itiself]
console.log(document.querySelector(".box").outerHTML) //'I am a box'

/*innerText → visible text only
textContent → all text (including hidden) */
console.log(document.querySelector(".box").innerText)

// Used to read tag name of an elelement
/*tagName → only for elements
nodeName → for all nodes */
console.log(document.querySelector(".container").tagName) //only exists for Element nodes
console.log(document.querySelector(".container").nodeName) // defined for any nade (text, comment etc )  

console.log(document.querySelector(".container").textContent)//Provides access to the tent inside the element: only text minus all tags

// The hidden property [Hide/show element]
console.log(document.querySelector(".container").hidden)// false
console.log(document.querySelector(".container").hidden = true)// true


console.log(document.querySelector(".box").innerHTML = "Hiy I am Riku")
console.log(document.querySelector(".box").hasAttribute("style"))// true //Methad to check for existence of an attrubuite
console.log(document.querySelector(".box").getAttribute("style"))// 'display: flex;' //Methad uised to getthe value of an atteubule
console.log(document.querySelector(".box").setAttribute("style", "display:inline"))// Method used to set the value of an attribuite
console.log(document.querySelector(".box").removeAttribute("style"))//Method to remove the attrubule from element
console.log(document.querySelector(".box").attributes)//Method to get the collection of all attribute

//Makes whole page editable
document.designMode = "on" // it help in design in any website

console.log(document.querySelector(".box").dataset)//If an elcment has an attribute namid" data-ore,it avaitable as clement dataset.one
console.log("I am a Devloper.")

//Accessing Elements
console.log(document.body)// it show body syntax in console
console.log(document.body.childNodes)// it show NodeList(4) [text, div.container, text, script]

// Navigating Children
console.log(document.body.firstChild)// it show body firstchild syntax in console
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes) //NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]


let cont = document.body.childNodes[1]
console.log(cont.childNodes[1])
console.log(cont.lastChild)
console.log(cont.firstElementChild)
console.log(cont.lastElementChild)// it show last element child
console.log(cont.lastElementChild.style.color = "Red")// it change color of the text
console.log(cont.firstElementChild.style.backgroundColor = "Red") // it change background color
console.log(cont.lastElementChild.parentElement) // it show paren node


console.log(document.body.firstElementChild.children)//HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box
console.log(document.body.firstElementChild.children[3])

// Sibling Navigation
console.log(document.body.firstElementChild.children[3].nextElementSibling)// it show next element of 3 children.
console.log(document.body.firstElementChild.children[3].previousElementSibling)// it show previous element of 3 children.
console.log(document.body.children[1])
console.log(document.body.children[1].rows)
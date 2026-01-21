/* 

console.log(document) 

//* Selectors => search for specific elements inside the DOM

let h1Node = document.querySelector("h1") // fist available h1

console.log(h1Node)

// let secondH1Node = document.querySelector("#second-title" )
let secondH1Node = document.getElementById("second-title" )
console.log(secondH1Node)

// web scrapping

console.log(secondH1Node.innerText)
console.log(secondH1Node.innerHTML)
console.log(secondH1Node.id)
console.log(secondH1Node.className)


// querySelectorAll()

let paragNodeList = document.querySelectorAll(".some-text")
console.log(paragNodeList)
// on NodeList we can treat it as an array for (length, index, for loop, forEach) but we cannot use things like filter, pop, splice, slice

console.log(paragNodeList[1])

paragNodeList.forEach((eachParagNode) => {
  console.log(eachParagNode.innerHTML)
})

//* nested selections

let cardNodeList = document.querySelectorAll(".card")
console.log(cardNodeList)

cardNodeList.forEach((eachCardNode) => {
  console.log(eachCardNode)
  // we want the text inside the paragraph

  let paragNodeList = eachCardNode.querySelectorAll("p")
  console.log(paragNodeList)
})

let something = document.querySelector("h5")
console.log(something)


// querySelector is mainly used to find things in the whole document. BUT can be used to search things inside a specific node.
*/

let h1Node = document.querySelector("h1") // fist available h1

let thirdH1Node = document.querySelector("#third-title")

console.log(thirdH1Node)

thirdH1Node.addEventListener("click", () => {
  console.log("clicking")

  thirdH1Node.innerText = "changing the DOM!"
  h1Node.innerText = "this also changes!"

})

// button that increases the counter in the screen
let incButtonNode = document.querySelector("#increment")
let counterNode = document.querySelector("#count h2 span")

incButtonNode.addEventListener("click", () => {
  // ++
  // counterNode.innerText = parseInt(counterNode.innerText) + 1
  counterNode.innerText++
})

//* deleting nodes
let deleteBtnNode = document.querySelector("#delete-btn")

deleteBtnNode.addEventListener("click", () => {
  deleteBtnNode.remove() // it does not destroy it. It simply removes it from the document.

  // document.querySelector("body").remove()

})

//* adding new nodes
let inputNode = document.querySelector("#name")
let addBtnNode = document.querySelector("#add-form button")
let ulNode = document.querySelector("#add-list")

console.log(inputNode)

addBtnNode.addEventListener("click", () => {

  // extract the text from the input
  let textFromUser = inputNode.value

  // create the new li element
  let newLiNode = document.createElement("li") // <li></li>
  // add the text to the li
  newLiNode.innerText = textFromUser
  console.log(newLiNode)

  // insert the li into the ul
  ulNode.append(newLiNode)

})

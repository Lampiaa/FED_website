// JavaScript Document
console.log("hi");


////////////////////
// Hamburger menu //
////////////////////

let deButton = document.querySelector("button")

deButton.addEventListener("click", toggleButton)

function toggleButton(){
  deButton.classList.toggle("is-open")
}





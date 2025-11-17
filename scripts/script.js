// JavaScript Document
console.log("hi");


////////////////////
// Hamburger menu //
////////////////////

let deButton = document.getElementById("hamburger")

deButton.addEventListener("click", toggleButton)

function toggleButton(){
  deButton.classList.toggle("is-open")
}
// ///////////////////////////////////////////////

const mButton = document.getElementById("min")
const pButton = document.getElementById("plus")
const teller = document.getElementById("amount")
const fav = document.getElementById("addFav")

let count = 0

mButton.addEventListener("click", () => {
  if (count > 0) {
    count--
    teller.textContent = count
  }
})

pButton.addEventListener("click", () => {
  count++
  teller.textContent = count
})

fav.addEventListener("click", () => {
  fav.classList.toggle("added")

  if (fav.classList.contains("added")){
    fav.textContent = "Added to wishlist";
  } 
  else{
    fav.textContent = "Add to wishlist";
  }
})
 
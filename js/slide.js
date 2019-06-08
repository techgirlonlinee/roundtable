const button = document.querySelector(".menu-toggle")
const menuBar = document.querySelector("div.menu")
const button2 = document.querySelector(".menu-slider")

button.addEventListener("click", function(){
	menuBar.classList.add("open")
})

button2.addEventListener("click", function(){
	menuBar.classList.remove("open")
})



var viewportWidth = window.innerWidth
if (viewportWidth < 440) {

const buttonMobile = document.querySelector(".menu-toggle-mobile")


buttonMobile.addEventListener("click", function(){
	menuBar.classList.add("open")
})

}
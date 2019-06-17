const sayom = document.getElementById("sayom")
sayom.addEventListener("click", function() {
	const circle = document.getElementById("mukdee")
	circle.style.display = "block"

	const close = document.getElementById("cross7")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})
})

const phutti = document.getElementById("phutti")
phutti.addEventListener("click", function() {
	const circle = document.getElementById("aroon")
	circle.style.display = "block"

	const close = document.getElementById("cross8")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})
})

const wanru = document.getElementById("wanru")
wanru.addEventListener("click", function() {
	const circle = document.getElementById("wanruu")
	circle.style.display = "block"

	const close = document.getElementById("cross9")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})
})

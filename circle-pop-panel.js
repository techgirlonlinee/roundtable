const maranan = document.querySelector("a.maranan")
maranan.addEventListener("click", function() {
	const circle = document.getElementById("m1")
	circle.style.display = "block"


	const close = document.querySelector(".crosss")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})
})

const neang = document.querySelector("a.neang")
neang.addEventListener("click", function() {
	const circle = document.getElementById("n1")
	circle.style.display = "block"

	const close = document.getElementById("cross2")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})

})

const aksorn = document.querySelector("a.aksorn")
aksorn.addEventListener("click", function() {
	const circle = document.getElementById("a1")
	circle.style.display = "block"

	const close = document.getElementById("cross3")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})

})


// female

const chot = document.getElementById("Chotrungroj")
chot.addEventListener("click", function() {
	const circle = document.getElementById("c1")
	circle.style.display = "block"

	const close = document.getElementById("cross4")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})
})

const fris = document.getElementById("Frisca")
fris.addEventListener("click", function() {
	const circle = document.getElementById("f1")
	circle.style.display = "block"

	const close = document.getElementById("cross5")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})
})

const ong = document.getElementById("Ong")
ong.addEventListener("click", function() {
	const circle = document.getElementById("m2")
	circle.style.display = "block"

	const close = document.getElementById("cross6")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})
})

//shorts


const chou = document.getElementById("chou")
chou.addEventListener("click", function() {
	const circle = document.getElementById("c2")
	circle.style.display = "block"

	const close = document.getElementById("cross7")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})
})

const weijie = document.getElementById("weijie")
weijie.addEventListener("click", function() {
	const circle = document.getElementById("w1")
	circle.style.display = "block"

	const close = document.getElementById("cross8")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})
})

const jimenex = document.getElementById("jimenex")
jimenex.addEventListener("click", function() {
	const circle = document.getElementById("j1")
	circle.style.display = "block"

	const close = document.getElementById("cross9")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})
})
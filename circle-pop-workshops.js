const not = document.querySelector("a.nottapon")
not.addEventListener("click", function() {
	const circle = document.getElementById("n1")
	circle.style.display = "block"


	const close = document.getElementById("cross1")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})
})

const thiti = document.querySelector("a.thiti")
thiti.addEventListener("click", function() {
	const circle = document.getElementById("t1")
	circle.style.display = "block"

	const close = document.getElementById("cross2")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})

})


// female

const taeng = document.getElementById("Taeng")
taeng.addEventListener("click", function() {
	const circle = document.getElementById("t2")
	circle.style.display = "block"

	const close = document.getElementById("cross3")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})
})

const grai = document.getElementById("grai")
grai.addEventListener("click", function() {
	const circle = document.getElementById("g1")
	circle.style.display = "block"

	const close = document.getElementById("cross4")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})
})



//shorts


const towira = document.getElementById("towira")
towira.addEventListener("click", function() {
	const circle = document.getElementById("t2")
	circle.style.display = "block"

	const close = document.getElementById("cross5")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})
})

const sukhum = document.getElementById("sukhum")
sukhum.addEventListener("click", function() {
	const circle = document.getElementById("s1")
	circle.style.display = "block"

	const close = document.getElementById("cross6")
	close.addEventListener("click", function() {
	circle.style.display = "none"
	})
})

pageNumber = 0
const pages = [
  {copy: '<span>Workshops</span> are immersive classes that offer hands-on mentoring from top professionals within the Thai and ASEAN film industry.'}, 
  {copy: '<span>Spotlights</span> present noteworthy Thai and ASEAN filmmakers to discuss their current work and career experiences.'},
  {copy: '<span>Socials</span> are informal get-togethers for participants to hang out, get a drink, and network with each other.'},
  {copy: '<span>Panels</span> bring together practitioners within the field of Thai and ASEAN cinema to discuss issues that are currently affecting the community.'},
]
const outputTag = document.querySelector(".circle p") 

const next = function () { 															//the thing that makes it go NEXT
  pageNumber = pageNumber + 1														//increase the number in our code
  if (pageNumber > pages.length - 1) {
    pageNumber = 0		 
  }
  updateSection()
}

const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber].copy	
}

var autoSlide = setInterval (function(){
  next()
  updateSection()
   }, 7000)
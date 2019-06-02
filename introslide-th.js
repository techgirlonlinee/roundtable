pageNumber = 0
const pages = [
  {copy: '<span>Workshops</span><br> กิจกรรมการเรียนรู้และปฏิบัติการจริงโดยเปิดห้องเรียนให้ผู้เข้าร่วมได้พบปะพูดคุย รับคำปรึกษาและปฏิบัติจริงจากมืออาชีพชั้นนำในอุตสาหกรรมภาพยนตร์ไทยและอาเซียน'}, 
  {copy: '<span>Spotlights</span><br> กิจกรรมพูดคุยจากผู้ผลิตภาพยนตร์ของไทยและอาเซียนแบ่งปันประสบการณ์การทำงานในแวดวงภาพยนตร์ของพวกเขา'},
  {copy: '<span>Socials</span><br> กิจกรรมสังสรรค์อย่างเป็นกันเองเพื่อให้ผู้เข้าร่วมกิจกรรมได้มีโอกาสทำความรู้จักและสร้างเครือข่ายระหว่างกัน'},
  {copy: '<span>Panels</span><br> กิจกรรมเสวนาเปิดโอกาสให้ผู้ที่สนใจด้านภาพยนตร์ทั้งในประเทศไทยและแถบภูมิภาคอาเซียนได้มีโอกาสหารือหรือแลกเปลี่ยนความคิดเกี่ยวกับประเด็นที่ส่งผลกระทบต่อแวดวงภาพยนตร์ในปัจจุบัน'},
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


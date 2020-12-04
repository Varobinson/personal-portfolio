
window.addEventListener('onload', function(){
  location.reload();
  location.href =  'http://127.0.0.1:5500'

})

window.onscroll = () => {
    const nav = document.querySelector('.navbar');
    if(this.scrollY <= 1) nav.className = ' navbar fixed-top navbar-expand-lg'; else nav.className = ' scroll navbar fixed-top navbar-expand-lg';
  };

let project = document.querySelector('.bud')
let project2 = document.querySelector('.bud2')
let card = document.querySelector('.item')
let card2 = document.querySelector('.item2')
let project3 = document.querySelector('.bud3')
let card3 = document.querySelector('.item3')

  project.addEventListener('mouseenter',function(){
    document.querySelector(".dropZone").style.display = "block";
    document.querySelector(".dropZone").style.transition = "all 0.5s !important";
    document.querySelector(".dropZone").style.margin = "30px !important";
    document.querySelector(".dropZone").style.transition = "transition: all 0.8s !important";
  })
  card.addEventListener('mouseleave',function(){
    document.querySelector(".dropZone").style.display = "none";
    document.querySelector(".dropZone").style.transition = "all 0.8s !important";
  })
  project2.addEventListener('mouseenter',function(){
    document.querySelector(".dropZone2").style.display = "block";
    document.querySelector(".dropZone2").style.transition = "all 0.5s !important";
    document.querySelector(".dropZone2").style.margin = "30px !important";
  })
  card2.addEventListener('mouseleave',function(){
    document.querySelector(".dropZone2").style.display = "none";
    document.querySelector(".dropZone2").style.transition = "all 0.8s !important";
  })
  project3.addEventListener('mouseenter',function(){
    document.querySelector(".dropZone3").style.display = "block";
    document.querySelector(".dropZone3").style.transition = "all 0.5s !important";
    document.querySelector(".dropZone3").style.margin = "30px !important";
  })
  card3.addEventListener('mouseleave',function(){
    document.querySelector(".dropZone3").style.display = "none";
    document.querySelector(".dropZone3").style.transition = "all 0.8s !important";
  })
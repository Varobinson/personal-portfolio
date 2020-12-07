
window.addEventListener('onload', function(){
  location.reload();
  location.href =  'http://127.0.0.1:5500'

})

window.onscroll = () => {
    const nav = document.querySelector('.navbar');
    if(this.scrollY <= 1) nav.className = ' navbar fixed-top navbar-expand-lg'; else nav.className = ' scroll navbar fixed-top navbar-expand-lg';
  };

let projects = document.querySelectorAll('.item')
let menuItems = document.querySelectorAll('.nav-link')

projects.forEach(project =>{
  project.addEventListener('mouseenter',function(e){
    e.target.querySelector(".dropZone").classList.add('active')
     
  })
  project.addEventListener('mouseleave',function(e){
    e.target.querySelector(".dropZone").classList.remove('active')
     $('#navbarText').collapse('hide')
  })

})
 
menuItems.forEach(item =>{
  item.addEventListener('click', function(e){
    
  })
})

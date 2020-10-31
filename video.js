$(document).ready(function() {
    let vid = document.querySelector('.playing')
    // vid.play();
    vid.addEventListener('ended',()=>{
      window.location = 'http://127.0.0.1:5500/home.html'
      
    })
  });
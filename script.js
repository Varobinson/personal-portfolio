
window.addEventListener('onload', function(){
  location.reload();
  location.href =  'http://127.0.0.1:5500'

})

window.onscroll = () => {
    const nav = document.querySelector('.navbar');
    if(this.scrollY <= 1) nav.className = ' navbar fixed-top navbar-expand-lg'; else nav.className = ' scroll navbar fixed-top navbar-expand-lg';
  };
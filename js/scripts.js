const gotop = document.querySelector('.gotop')
window.onscroll = function() {
  if(this.scrollY >= 400) {
    gotop.style.display = 'block'
  }
  else {
    gotop.style.display = 'none'
  }
}

gotop.onclick = () => {
  window.scroll(0,0)
}
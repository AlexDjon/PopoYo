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

const arts = document.querySelectorAll('.list article')
arts.forEach((v, i) => {
  v.onclick = () => {
    if(i != 1) {
      const mid = arts[1].style.backgroundImage
      const selected = arts[i].style.backgroundImage
      
      arts[1].style.backgroundImage = selected
      arts[i].style.backgroundImage = mid
    }
  }
})

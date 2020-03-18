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

// Orçamento
function Orcamento() {
  this.categoria = ''
  this.quant = 1
  const orcamento = document.querySelector('.orcamento')
  const quantidade = document.querySelector('.dados #quant')
  const total = document.querySelector('.dados #total')
  const valor = 25
  const mp = {
    caricatura: [
      'a248d185-2eae-44b8-a002-5725ea595dd1',
      '43668e86-aa47-47e9-abc1-bd943c6aa95d',
      'f2bf1d81-9c36-4200-b39a-cc4cdb675eb0',
      'ed8bd7c9-7699-47e0-a3ca-4b2d8b199874',
      '7aa0ba93-1249-4ebf-8a10-06b0ee3078d9'
    ],
    avatar: [
      'afca32e8-616e-49bf-8d2a-c2a883bf5120',
      '7345b999-11be-4f80-bba4-3c3c7fda2de1',
      'ad0c3e6f-adef-424d-a7b7-9486f6a4eb59',
      'da8c5b66-d7a3-42eb-bad4-5219af5b8f2b',
      '9a56cd70-246b-4fbf-8bf0-727323f31807'
    ],
    'ilustração': [
      '86074de6-1e27-4a8b-958a-fc88011797cb',
      'afed479d-19e1-412a-95c3-cf3bc339a64a',
      'cf90c34d-e3fc-4606-95ce-567ccf323853',
      '3b8da517-d47f-4413-97df-124f13fd8bcb',
      '22b24f10-73f7-401d-a427-8b723e52d8a4'
    ]
  }

  const close = document.querySelector('#card_close')
  close.onclick = () => {
    orcamento.style.display = 'none'
  }

  this.openCard = (categoria) => {
    const image = `img/c_${categoria}.jpg`    
    this.categoria = categoria

    const payInfos = {
      img: document.querySelector('.infos img'),
      h4: document.querySelector('.infos h4')
    }
    payInfos.h4.innerHTML = categoria
    payInfos.img.src = image

    orcamento.style.display = 'flex'    
  }
  this.enforce = () => {
    const el = quantidade
    if(el.value != ""){
      if(parseInt(el.value) < parseInt(el.min)){
        el.value = el.min;
        this.quant = el.min
      }
      else if(parseInt(el.value) > parseInt(el.max)){
        el.value = el.max;
        this.quant = el.max
      }
      else {
        this.quant = el.value
      }      
      total.innerHTML = `R$ ${this.quant * valor},00`
    } else {
      this.quant = 1
      total.innerHTML = `R$ ${this.quant * valor},00`
    }
  }

  const submit = document.querySelector('.dados button')
  submit.onclick = () => {
    let link = `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=289691572-`
        link += mp[this.categoria][quantidade.value-1]
    window.open(link)
  }
  
}

const orcamento = new Orcamento()

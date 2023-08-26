import './scss/main.scss'

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min)
}

function extractLotto(lotto){
  let lottoEl = document.querySelector('#lotto')
  let count = lottoEl.childElementCount

  if( count < 6 ){
    let childEl = document.createElement('div')
    childEl.textContent=lotto[count]
    lottoEl.appendChild(childEl)
    setTimeout(()=>{ extractLotto(lotto) }, 100);
  }
  
}

document.querySelector('#lotto-btn').addEventListener('click',function(){
  let lottoEl = document.querySelector('#lotto')
  let lotto = new Set()
  lottoEl.innerHTML = ''

  for(;lotto.size < 6;){
      lotto.add(getRandomArbitrary(1,45))
  }
  
  extractLotto( Array.from(lotto) )
})



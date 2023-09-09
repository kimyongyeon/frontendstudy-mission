function Calculator(){
  this.list = []
  let top = document.querySelector('.float')
  let display = document.querySelector('.display')

  this.getList = function (){
    return this.list
  }
  this.printList = function (){
    top.innerText = this.getList().join(' ')
  }
  this.add = function (check){

    if(/[0-9]/.test(check)){
      display.value += check
    } else if(/\+|-|\*|\//.test(check)){
      if( /\+|-|\*|\//.test(check) ){
        this.list.push(display.value)
        this.list.push(check)
        this.printList()
        display.value = ''        
      }
    } else if (/=|Enter/.test(check) ){
      if(display.value != ''){
        this.list.push()
      }
      this.calculate()

    } else if ('Backspace' == check){
      display.value = display.value.substr(0, display.value.length - 1)
    } else if ('Escape' == check){
      this.list = []
      display.value = ''
      top.innerText =''
    }      
  }

  this.calculate = function(){
    if( /\+|-|\*|\/| /.test(this.list[this.list.length - 1]) ){
      this.list.pop()
    }
    top.innerText = 'Ans = ' + eval(this.list.join(''))
    display.value = ''
    this.list = []
  }
}

let calc = new Calculator()

wrap.addEventListener('click',function(event){
  if(event.target.nodeName == 'BUTTON'){
    calc.add(event.target.innerText)
  }
})

window.addEventListener('keydown',function(event){
  calc.add(event.key)
})

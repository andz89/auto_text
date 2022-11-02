let textContent = document.querySelector('#textContent')

let saveText = 'Dawn Andrew N. Rivero'


let targetTextInput = document.querySelector('#targetTextInput')
let input = document.querySelector('#input')
let keyInput = document.querySelector('#key')


let l;

textContent.addEventListener('keyup', (e)=>{
    var key = keyInput.value
    let curPos =  textContent.selectionStart;
    // will get the value of the text area
    let x= textContent.value;
    // will get the value of the input box  

    let a =  e.target.value.slice(l)
    targetTextInput.value = a

    if(e.keyCode === 32){
    targetTextInput.value = ''
    l = e.target.value.length

    }
      
        
    if( targetTextInput.value  == key){

        textContent.value =  x.slice(0 ,curPos - key.length)+input.value  + ' '

    }
})

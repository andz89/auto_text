let textContent = document.querySelector('body')

let saveText = 'Dawn Andrew N. Rivero'
let k = '-name'

let targetTextInput = document.querySelector('#targetTextInput')
let input = document.querySelector('#input')
let keyInput = document.querySelector('#key')
let l;

let curPos;


textContent.addEventListener("click",(e)=>{
    l = e.target.value.length 

})

textContent.addEventListener('keyup', (e)=>{
    if(e.target.value === undefined){
        return false
    }

    
    var key = k
    curPos =  e.target.selectionStart;
 
    // will get the value of the text area
    let x= e.target.value;
    // will get the value of the input box  
   
    let a =  e.target.value.slice(l)
    
    targetTextInput.value = a

    if(e.code  ===  'Space' || e.code === 'Enter'){
    targetTextInput.value = ''
    l = e.target.value.length 

    }   

        
    if( targetTextInput.value  == key){

        e.target.value =  x.slice(0 ,curPos - key.length)+saveText

    }
})

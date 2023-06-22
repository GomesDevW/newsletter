const submitBtn = document.querySelector("#button")
const demissBtn = document.querySelector("#message-button")
const container = document.querySelector('.container')
const message = document.querySelector('.message-container')
const email = document.querySelector('#user-email')
const input = document.querySelector('#email')
const error = document.querySelector('.email-field span')



const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


function subscribe(){

    if(input.value === "" ){      
        
        error.style.display = 'block'
        input.style.backgroundColor = 'rgb(250, 218, 218)'       
        input.style.border = '1px solid rgb(255, 0, 0)'
            
    } else if(!input.value.match(mailformat)){
        
        error.style.display = 'block'
        input.style.backgroundColor = 'rgb(250, 218, 218)'
        input.style.border = '1px solid rgb(255, 0, 0)'
        
    }else{
       
        email.innerText = input.value
        container.style.display = 'none'
        message.style.display = 'flex'
    }
    


}

function demiss(){
 
    container.style.display = 'flex'
    message.style.display = 'none'
    error.style.display = 'none'
    input.style.backgroundColor = '#fff'
    input.style.border = '1px solid #ccc'
    input.value = ""
}

submitBtn.addEventListener('click', subscribe)
demissBtn.addEventListener('click', demiss)

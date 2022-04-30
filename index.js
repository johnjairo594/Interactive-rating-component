const button1       = document.getElementById('btn1')
const button2       = document.getElementById('btn2')
const button3       = document.getElementById('btn3')
const button4       = document.getElementById('btn4')
const button5       = document.getElementById('btn5')
const submitButton  = document.getElementById('submit')
let principalContainer = document.getElementById('container')
let value

button1.addEventListener('click', () => {
    button1.classList.add('number-selected');
    button2.classList.remove('number-selected')
    button3.classList.remove('number-selected')
    button4.classList.remove('number-selected')
    button5.classList.remove('number-selected')
    value = 1  
})

button2.addEventListener('click', () => {
    button2.classList.add('number-selected')
    button1.classList.remove('number-selected')
    button3.classList.remove('number-selected')
    button4.classList.remove('number-selected')
    button5.classList.remove('number-selected') 
    value = 2
})

button3.addEventListener('click', () => {
    button3.classList.add('number-selected')
    button2.classList.remove('number-selected')
    button1.classList.remove('number-selected')
    button4.classList.remove('number-selected')
    button5.classList.remove('number-selected') 
    value = 3
})

button4.addEventListener('click', () => {
    button4.classList.add('number-selected')
    button2.classList.remove('number-selected')
    button3.classList.remove('number-selected')
    button1.classList.remove('number-selected')
    button5.classList.remove('number-selected') 
    value = 4
})

button5.addEventListener('click', () => {
    button5.classList.add('number-selected')
    button2.classList.remove('number-selected')
    button3.classList.remove('number-selected')
    button4.classList.remove('number-selected')
    button1.classList.remove('number-selected') 
    value = 5
})

submitButton.addEventListener('click', function(){
    valueSubmit(value)})

function valueSubmit(value){
    if (value > 0) {
        const container = `
        <div class="icon icon-thank">
            <img src="images/illustration-thank-you.svg" alt="illustration-thank-you">
        </div>
        <div class="important-msg">
            <p>You selected ${value} out of 5 </p>
        </div>
        <h1 class="tittle">
            Thank you! 
        </h1>
        <p class="paragraph paragraph-thank">
            We appreciate you taking the time to give a rating. 
            If you ever need more support, don't hesitate to get in touch!
        </p>
        `
        const div = document.createElement('div');
        div.innerHTML = container;
        div.classList.add('container', 'container-Thank')
        document.body.replaceChild(div, principalContainer)
    }
    else {
        alert('please select a rating')
    }
} 

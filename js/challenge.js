let counter = document.querySelector('#counter') 
let minus = document.querySelector('#minus') 
let plus = document.querySelector('#plus') 
let heart = document.querySelector('#heart')
let pause = document.querySelector('#pause')
let submit = document.querySelector('#comment-form')

function counters() {
   count = setInterval(()=> {
      counter.innerHTML++
  }, 1000)
}

function decrement() {
    if(counter.innerHTML > 0) {
            counter.innerHTML--
    }
}

function increment() {
      counter.innerHTML++
}

function pauseTime() {
    if(pause.innerHTML != 'Play') {
        clearInterval(count) 
        pause.innerHTML = 'Play'

    }else{
        counters();
        pause.innerHTML = 'pause'
    }
}

let numClear = 0

function likes() {
    let like = document.querySelector('.likes')
    let likeUl = document.createElement('ul')
    let likeLi = document.createElement('ls')
    let currentCount = counter.innerHTML
    if(numClear >= 0) {
        numClear++
        likeLi.innerHTML = `${currentCount} has been liked ${numClear} time`
        like.append(likeUl)
        likeUl.append(likeLi)
    }
 }


 function submits(e) {
    let comments = document.querySelector('.comments')
    let commentInput = document.querySelector('#comment-input').value
    let p = document.createElement('p')
    e.preventDefault()
    p.innerHTML = commentInput
    comments.append(p)
 }

 
document.addEventListener('DOMContentLoaded', counters)
minus.addEventListener('click', decrement)
plus.addEventListener('click', increment)
pause.addEventListener('click', pauseTime)
heart.addEventListener('click',likes)
submit.addEventListener('submit',submits)
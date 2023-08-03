import Dogs from './Dog.js'
import dogsData from './data.js'

const noBtn = document.getElementById("noBtn")
const likeBtn = document.getElementById("yesBtn")

let dog = new Dogs(dogsData.shift())
let isWaiting = false

function clickLikeBtn() {
    if (!isWaiting) {
        isWaiting = true 
        dog.hasBeenLiked = true
        render()
    setTimeout(() => {
        if (dogsData.length === 0) {
            end()
        } else {
            dog = new Dogs(dogsData.shift())
            render()
            isWaiting = false          
      }
    }, 1500) 
  }   
}          

function clickNoBtn() {
    if (!isWaiting) {
        isWaiting = true
        dog.hasBeenSwiped = true
        render()
    setTimeout(() => {
    if (dogsData.length === 0) {
        end()
    } else {
        dog = new Dogs(dogsData.shift())
        render()
        isWaiting = false       
     }
    }, 1500)     
  } 
}

function end() {
    setTimeout(() => {
        document.body.innerHTML = `
        <div class="end-msg">
            <h2 class="end-txt">Chegou ao final</h2>
            <h3 class="end-txt">Gostou? 😎</h3>
            <p class="end-txt">Pra puder programmar mais coisas legais, preciso seguir essa caminhada.</p>
            <p class="end-txt">Renovação do contrato vai cair bem pra todo mundo 😋😇</p>
        </div>
        `
    }, 1500)
}

function render() {
        document.getElementById("dogs").innerHTML = dog.getDogHtml()       
}

noBtn.addEventListener("click", clickNoBtn)
likeBtn.addEventListener("click", clickLikeBtn)
render()


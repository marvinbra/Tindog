// Remember to import the data and Dog class!

import Dogs from './Dog.js'
import dogsData from './data.js'

const noBtn = document.getElementById("noBtn")
const likeBtn = document.getElementById("yesBtn")

let dog = new Dogs(dogsData.shift())

function clickLikeBtn() {
    dog.hasBeenLiked = true
    render()
    setTimeout(() => {
        dog = new Dogs(dogsData.shift())
        render()
    }, 1500)
}

function clickNoBtn() {
    dog.hasBeenSwiped = true
    render()
    setTimeout(() => {
        dog = new Dogs(dogsData.shift())
        render()
    }, 1500) 
}

function render() {
        document.getElementById("dogs").innerHTML = dog.getDogHtml()       
}

noBtn.addEventListener("click", clickNoBtn)
likeBtn.addEventListener("click", clickLikeBtn)
render()


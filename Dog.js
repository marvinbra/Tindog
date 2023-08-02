
import dogsData from './data.js'

class Dogs {
    constructor(data) {
        Object.assign(this, data)
    }
    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <img src="${avatar}" class="dogImg">
                <div id="dogInfo">
                    <h4>${name}, ${age}</h4>
                    <p>${bio}</p>
                </div>
            <img style="display: ${this.hasBeenLiked ? "block" : "none"}" src="images/badge-like.png" class="badges">
            <img style="display: ${this.hasBeenSwiped ? "block" : "none"}" src="images/badge-nope.png" class="badges">
        `
    }
}

export default Dogs


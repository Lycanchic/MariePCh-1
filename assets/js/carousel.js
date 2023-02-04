var position = 0
var containerEl = document.querySelector(".container")
var prevEl = document.getElementById("btnEl")
console.log(prevEl)
var nextEl = document.querySelector(".next")
var imgEl =  document.getElementById("imgEl")

var imgUrls = ["assets/images/Bride&BM.jpg", "assets/images/20170630_142535.jpg", "assets/images/20190723_200306.jpg", "assets/images/20190921_170642.jpg", "assets/images/20190921_170653(0).jpg", "assets/images/20190922_184920.jpg","assets/images/20190922_185229.jpg", "assets/images/20190922_185402.jpg", "assets/images/20190922_190026.jpg","assets/images/Bride&BM.jpg", "assets/images/20190922_190028.jpg", "assets/images/20190922_190534.jpg", "assets/images/20190922_190549.jpg", "assets/images/BrideSolo1.jpg"]

imgEl.setAttribute("src", imgUrls[0])

function handleNextClick() {
    position = position +1
    if (position > 13) {
     position = 0
    }
    console.log("next button clicked")
    
    console.log(position)
    imgEl.setAttribute("src", imgUrls[position])

}

function handlePrevClick() {
    console.log("prev button clicked")
    position = position -1
    if (position < 0) {
        position = 13
    }
    console.log(position)
    imgEl.setAttribute("src", imgUrls[position])
}

prevEl.addEventListener("click", handlePrevClick)
nextEl.addEventListener("click", handleNextClick)

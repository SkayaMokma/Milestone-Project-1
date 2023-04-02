//form 
let name = document.getElementById("userInput")
let form = document.getElementById("form")
function getUserName(){
    let input = document.getElementById('userInput').value
    form.hidden= true
    let top = document.getElementById("heading")
    top.append(input)
    return input
    //window.location.href = 'game.html' need to change the page to game after submitting
}

form.addEventListener("submit", getUserName)

function newImage(url){
    let image = document.createElement('img')
    image.src= url
    document.body.append(image)
    return image
}




//newImage('https://tse4.mm.bing.net/th?id=OIP.ymfaEssguIX4rnqpIyJNLwHaHE&pid=Api&P=0')



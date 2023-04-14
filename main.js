// welcome and username form

let name = document.getElementById('userInput')
let form = document.getElementById('form')

function getUserName(){
    // window.location.href = 'gameScreen.html'
    let heading = document.getElementById('heading')
    let input = document.getElementById('userInput').value
    form.hidden= true
    heading.append(input)
   
    function userLives(url, className){
        let life = document.createElement('img')
        life.src = url
        life.className = className
        heading.append(life)
        
    }
    userLives('https://cdn2.iconfinder.com/data/icons/casino-gambling-and-card-games/120/1b-512.png', 'heart1')
    userLives('https://cdn2.iconfinder.com/data/icons/casino-gambling-and-card-games/120/1b-512.png', 'heart2')
    userLives('https://cdn2.iconfinder.com/data/icons/casino-gambling-and-card-games/120/1b-512.png', 'heart3')
    userLives('https://cdn2.iconfinder.com/data/icons/casino-gambling-and-card-games/120/1b-512.png', 'heart4')
    userLives('https://cdn2.iconfinder.com/data/icons/casino-gambling-and-card-games/120/1b-512.png', 'heart5')



    return input
    // input is username . function stores username and displays it in the top bar 
}


// move function to control the character
function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
        function moveWithArrowKeys(left, bottom, callback){
            let direction = null;
            let x = left;
            let y = bottom;
        
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
            
            function moveCharacter(){ 
                if(direction === 'west' && x > 0){
                    x-=1
                }
                if(direction === 'north' && y < 350){
                    y+=1
                }
                if(direction === 'east' && x < 1210){
                    x+=1
                }
                if(direction === 'south' && y > 102){
                    y-=1
                }
                
                element.style.left = x + 'px'
                element.style.bottom = y + 'px'
            }
            
            setInterval(moveCharacter, 1)
            
            document.addEventListener('keydown', function(e){
                if(e.repeat) return;
            
                if(e.key === 'ArrowLeft'){
                    direction = 'west'
                }
                if(e.key === 'ArrowUp'){
                    direction = 'north'
                }
                if(e.key === 'ArrowRight'){
                    direction = 'east'
                }
                if(e.key === 'ArrowDown'){
                    direction = 'south'
                }
                callback(direction)
            })
            
            document.addEventListener('keyup', function(e){
                direction = null
                callback(direction)
            })
        }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}

// newImage function to add pictures
function newImage(url, className){
    let image = document.createElement('img')
    image.src = url
    image.className = className
    let container = document.querySelector('.container')
    container.append(image)
    return image
}
// newItem function to add images that will be "picked up" upon clicking

function newItem(url, className, id) {
    newImage.className = className
    let item = newImage(url, className, id)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url
        inventoryItem.className = className
        inventoryItem.id = id
        inventory.append(inventoryItem)
       
     })
     return item
}


function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'https://tse3.mm.bing.net/th?id=OIP.LpiWWF-WWtVFepE4VtysFQHaEK&pid=Api&P=0'
    }
    if(direction === 'west'){
        character.src = 'http://pluspng.com/img-png/young-girl-walking-silhouette-512.png'
    }
    if(direction === 'north'){
        character.src = 'https://tse1.mm.bing.net/th?id=OIP.D7Nux_LFZePii7DK9J6lLwHaHa&pid=Api&P=0'
        
    }
    if(direction === 'east'){
        character.src = 'https://tse4.mm.bing.net/th?id=OIP.REJtUl9ymxOZ-zbyorm7YQHaHa&pid=Api&P=0'
    }
    if(direction === 'south'){
        character.src = 'https://tse3.mm.bing.net/th?id=OIP.sfTpfyOWVKKs54-_T4oDhQHaHa&pid=Api&P=0'
    }
    }
    

// main calling code starts here 


const character = newImage('https://tse3.mm.bing.net/th?id=OIP.LpiWWF-WWtVFepE4VtysFQHaEK&pid=Api&P=0', 'character')
document.createElement('img')

move(character).withArrowKeys(310, 215, handleDirectionChange)
move(newImage('https://clipground.com/images/transparent-tree-clipart-3.png', 'tree')).to(200, 195)
move(newImage('https://tse1.mm.bing.net/th?id=OIP.PjjmmdFYEKcgWdameLuzcgHaGh&pid=Api&P=0', 'bush')).to(780, 110)
move(newImage('https://tse4.mm.bing.net/th?id=OIP.W1w7cloFTQfXgUSpBRNExQHaIS&pid=Api&P=0', 'roses')).to(550, 300)
move(newImage('https://tse4.mm.bing.net/th?id=OIP.IPkTQ3Qh9gbK_JvkdyP7wwHaHx&pid=Api&P=0', 'pond')).to(1000, 250)
move(newImage('https://tse1.explicit.bing.net/th?id=OIP.xH0KgqgGNJe62NiSRtoU5QHaDq&pid=Api&P=0', 'rocks')).to(650, 350)
move(newImage('https://clipground.com/images/nature-clipart-transparent-7.png', 'flowers')).to(1100, 100)
move(newImage('https://clipground.com/images/nature-clipart-transparent-7.png', 'flowers')).to(940, 100)
move(newImage('https://tse1.mm.bing.net/th?id=OIP.wyXw6yOaGsy62XcDKIPMMwHaIK&pid=Api&P=0', 'tree2')).to(1125,100)
move(newImage('https://tse1.mm.bing.net/th?id=OIP.kn95-AB9VkRpD2Kit3Zp0QHaHl&pid=Api&P=0', 'waterfall')).to(5, 250)
move(newImage('https://webstockreview.net/images/dirt-clipart-grass-14.png', 'meadow')).to(-40 ,75)
move(newImage('https://tse1.mm.bing.net/th?id=OIP.8fAtwanMyEHSIzDfLyYbWAHaGT&pid=Api&P=0', 'path')).to(370,50)
move(newImage('https://tse4.mm.bing.net/th?id=OIP.1MplLandC-y782bNodABVwHaCm&pid=Api&P=0', 'grass')).to(740,235)

move(newItem('https://cdn.onlinewebfonts.com/svg/img_107813.png', 'star', 'star',)).to(1180, 400)
move(newItem('http://www.carstickers.com/prodimages/1875_daisy_flower_sticker_decal.gif', 'flowerItem', 'flowerItem')).to(979, 130)
move(newItem('https://i.pinimg.com/originals/2c/f7/3a/2cf73a713a1cad2119852971fd87b438.png', 'diamond', 'diamond')).to(760,410)
move(newItem('http://designlooter.com/images/water-drop-svg-13.png', 'water', 'water')).to(170, 200)
move(newItem('https://www.freeiconspng.com/uploads/leaf-icon-png-6.png', 'leaf', 'leaf')).to(520, 240)

// itemRiddle to give clue when item in inventory is clicked
function riddles() {
document.querySelector(".water").addEventListener('click', () => {
    let water = prompt('I run smoother than most any rhyme; I love to fall but cannot climb.')
    if (water === 'water'){
        alert('Riddle solved successfully')
    } else {
        alert('Riddle answered incorrectly, one point of life force has been deducted.')
        document.querySelector(".heart5").remove()
    }
})
document.querySelector(".star").addEventListener('click', () => {
    let star = prompt('I am a god, a planet, and a measurer of heat.')
    if (star === 'mercury'){
        alert('Riddle solved successfully')
    } else {
        alert('Riddle answered incorrectly, one point of life force has been deducted.')
        document.querySelector(".heart4").remove()
    }
})
document.querySelector(".flowerItem").addEventListener('click', () => {
    let flowerItem = prompt('A vase is what I usually adorn, but beware of my thorns.')
    if (flowerItem === 'rose'){
        alert('Riddle solved successfully')
    } else {
        alert('Riddle answered incorrectly, one point of life force has been deducted.')
        document.querySelector(".heart3").remove()
    }
})
document.querySelector(".diamond").addEventListener('click', () => {
    let diamond = prompt('Under pressure is the only way I work, and by myself is the only way I am hurt.')
    if (diamond === 'diamond'){
        alert('Riddle solved successfully')
    } else {
        alert('Riddle answered incorrectly, one point of life force has been deducted.')
        document.querySelector(".heart2").remove()
    }
})
document.querySelector(".leaf").addEventListener('click', () => {
    let leaf = prompt('I can be big or small but you often see me fall.')
    if (leaf === 'leaf'){
        alert('Riddle solved successfully')
    } else {
        alert('Riddle answered incorrectly, one point of life force has been deducted.')
        document.querySelector(".heart1").remove()
    }
})
   if (document.querySelector(".heart1").remove() === true && document.querySelector(".heart2").remove() === true && document.querySelector(".heart3").remove() === true && document.querySelector(".heart4").remove() === true && document.querySelector(".heart5").remove()) {
    alert('You have died.')
   } else {
    alert('You have successfully survived Zelden\'s riddles')
   }
}
riddles()
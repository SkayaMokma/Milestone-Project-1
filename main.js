// welcome and username form

// trying to make this file alter both html files

let name = document.getElementById("userInput")
let form = document.getElementById("form")
function getUserName(){
    // window.location.href = 'gameScreen.html'
    let input = document.getElementById('userInput').value
    form.hidden= true
    let top = document.getElementById("heading")
    top.append(input)
    return input
    // input is username . function stores username and displays it in the top bar 
}
//form.addEventListener("submit", getUserName)

//newInventory function to display items
// function newInventory(){
//     let inventory = document.createElement('div')
//     inventory.style.width = '100%'
//     inventory.style.height = '100px'
//     inventory.style.display = 'flex'
//     inventory.style.flexDirection = 'row'
//     inventory.style.alignItems = 'center'
//     inventory.style.justifyContent = 'space-evenly'
//     inventory.style.border = '2px solid black'
//     inventory.style.backgroundColor = 'dimgray'
//     document.body.append(inventory)
//     return inventory
// }

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
                if(direction === 'north' && y < 600){
                    y+=1
                }
                if(direction === 'east'){
                    x+=1
                }
                if(direction === 'south'){
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
function newItem(url, className) {
    let item = newImage(url, className)
    newImage.className = className
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
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
move(newImage('https://tse1.mm.bing.net/th?id=OIP.PjjmmdFYEKcgWdameLuzcgHaGh&pid=Api&P=0', 'flowerBush')).to(800, 150)
move(newImage('https://tse4.mm.bing.net/th?id=OIP.W1w7cloFTQfXgUSpBRNExQHaIS&pid=Api&P=0', 'roses')).to(550, 300)
move(newImage('https://tse4.mm.bing.net/th?id=OIP.IPkTQ3Qh9gbK_JvkdyP7wwHaHx&pid=Api&P=0', 'pond')).to(1000, 250)
move(newImage('https://tse1.explicit.bing.net/th?id=OIP.xH0KgqgGNJe62NiSRtoU5QHaDq&pid=Api&P=0', 'rocks')).to(700, 350)
move(newImage('https://clipground.com/images/nature-clipart-transparent-7.png', 'flowers')).to(1100, 100)
move(newImage('https://clipground.com/images/nature-clipart-transparent-7.png', 'flowers')).to(940, 100)
move(newImage('https://tse1.mm.bing.net/th?id=OIP.wyXw6yOaGsy62XcDKIPMMwHaIK&pid=Api&P=0', 'tree2')).to(1125,100)

move(newItem('https://cdn.onlinewebfonts.com/svg/img_107813.png', 'star')).to(100, 700)

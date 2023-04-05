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
function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'dimgray'
    document.body.append(inventory)
    return inventory
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
                if(direction === 'west'){
                    x-=1
                }
                if(direction === 'north'){
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
function newImage(url){
    let image = document.createElement('img')
    image.src= url
    document.body.append(image)
    return image
}
// newItem function to add images that will be "picked up" upon clicking
function newItem(url) {
    let item = newImage(url)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
}

// main calling code starts here 

const inventory = newInventory()
move(inventory).to(0,0)
move(newImage('https://clipground.com/images/transparent-tree-clipart-3.png')).to(380, 475)

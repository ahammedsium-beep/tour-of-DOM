// document.getElementById('players-container').childNodes[3].childNodes[1].parentNode.parentNode.parentNode

// create element and set innerText or innerHTML
const newChild = document.createElement('li')
newChild.innerText = 'New born footballer here'

// find the parent where you will add the child
const playerList = document.getElementById('player-list')

// append the child to the parent
playerList.appendChild(newChild)

// old dhaka id te ekta h1 tag add korbo
const newH1 = document.createElement('h1')
newH1.innerText = 'Practice HTML tags adding'

const oldDhaka = document.getElementById('old-dhaka')
oldDhaka.appendChild(newH1)

newH1.style.color = 'gray'
newH1.style.background = 'pink'
newH1.style.padding = '15px'
newH1.style.borderRadius = '13px'
newH1.style.textAlign = 'center'

// bazar e add korbo khabar arekta 

const newFood = document.createElement('li')
newFood.innerText = 'Lobon'
const bazarList = document.getElementById('bazar-list')
bazarList.appendChild(newFood)
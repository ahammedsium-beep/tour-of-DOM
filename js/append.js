// 1. parent node
const mainContainer = document.getElementById('main-container')

// 2. create child node
const placeSection = document.createElement('section')

// create h1
const h1 = document.createElement('h1')
h1.innerText = 'Places I want to visit'
placeSection.appendChild(h1)

const pTag = document.createElement('p')
pTag.innerText = 'Here are some places i dream to visit'
placeSection.appendChild(pTag)



// 3. append placeSection to the main container
mainContainer.appendChild(placeSection)

// easier way to create html tags

const goodHabits = document.createElement('section')
goodHabits.innerHTML = `
    <h1>Habits which are considerd good</h1>
        <ul>
            <li>Praying</li>
            <li>Exercise</li>
            <li>Helping poors</li>
            <li>Reading</li>
            <li>Socializing</li>
        </ul>
`

mainContainer.appendChild(goodHabits)
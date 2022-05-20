/*html-ben 2 div alatt vannak a karakteradatok:
- hero
-monster*/
/*1. Take the hard - coded HTML for the Wizard card, bring it 
   into index.js and then inject it back into its div with 
   JavaScript.
2. Do the same for Orc card.
nem adunk külön variable-t a getelement-nek*/

document.getElementById('hero').innerHTML = `
    <div class="character-card">
        <h4 class="name"> Wizard </h4>
        <img class="avatar" src="images/wizard.png"/>
        <p class="health">health: <b> 60 </b></p>
        <div class="dice-container"><div class="dice"> 6 </div></div>
    </div>   
`
document.getElementById('monster').innerHTML = `
    <div class="character-card">
        <h4 class="name"> Orc </h4>
        <img class="avatar" src="images/orc.png"/>
        <p class="health">health: <b> 10 </b></p>
        <div class="dice-container"><div class="dice"> 4 </div></div>
    </div>
`
    /* így meg van a html-ből minden ami kell ott ezeket kitöröljük és marad 
    a hero div meg a monster div*/

// megadjuk a karakerek valu-jait

const heroElementId = "hero"
const heroName = "Wizard"
const heroAvatar = "images/wizard.png"
const heroHealth = "60"
const heroDiceRoll = 6

const monsterElementId = "monster"
const monsterName = "Orc"
const monsterAvatar = "images/orc.png"
const monsterHealth = "10"
const monsterDiceRoll = 4

/* kreálunk egy function-t hogy renderelje a karraktereket és a html-ben 
behelyettesítjük hogy a hardcode helyett lehessen dolgozni vele*/

function renderCharacter(elementId, name, avatar, health, diceRoll) {
    document.getElementById(elementId).innerHTML =
        `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health}</b></p>
        <div class="dice-container"><div class="dice"> ${diceRoll} </div></div>
    </div>`;
}

renderCharacter(heroElementId, heroName, heroAvatar, heroHealth, heroDiceRoll)
renderCharacter(monsterElementId, monsterName, monsterAvatar, monsterHealth, monsterDiceRoll)

/*
1. Convert our consts into two objects called
"monster" and "hero".
2. Update the renderCharacter() function so that it accepts 
a single object "data" as its parameter instead of five string / numbers,
    reducing the number of arguments to pass in from five to one.
3. Update the template now each variable is coming from "data".
4. Update the function call.*/

const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceRoll: 6
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceRoll: 4
}

function renderCharacter(data) {
    document.getElementById(data.elementId).innerHTML =
        `<div class="character-card">
            <h4 class="name"> ${data.name} </h4>
            <img class="avatar" src="${data.avatar}" />
            <div class="health">health: <b> ${data.health} </b></div>
            <div class="dice-container">
                <div class="dice"> ${data.diceRoll} </div>
            </div>
        </div>`
}

renderCharacter(hero);
renderCharacter(monster);

// KITÉRŐ OBJECT DESTRUCTURING

const dreamHoliday = {
    destination: 'Austin, Texas',
    activity: 'visit the Tesla HQ',
    accommodation: 'luxury ranch',
    companion: 'Elon Musk'
}

//egy variable-be el lehet menteni egy object összes paraméterét majd felhasználni újra

const { destination, activity, accommodation, companion } = dreamHoliday

console.log(`I would love to go to ${destination} to ${activity}. 
     I'd sleep in a ${accommodation} and hang out with ${companion} all day.`)


// 1. Deconstruct the data object
// 2. Update the template string as necessary

function renderCharacter(data) {
    // fv-n belül ugye hogy működjön, ezután a data.helyett már csaka paraméterek kellenek
    const { elementId, name, avatar, health, diceRoll } = data
    document.getElementById(data.elementId).innerHTML =
        `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                <div class="dice"> ${diceRoll} </div>
            </div>
        </div>`
}


// a karakter objectek kaptak 1-1 diceCount paramétert is ezt a data const-ba is betettük
function renderCharacter(data) {
    const { elementId, name, avatar, health, diceRoll, diceCount } = data;

    /*
    1. declare a let called diceHtml and initialize it with an empty 
    string. 
    2. Use a for loop to update diceHtml so that it contains the 
    HTML for our dice. The number of dice needed is specificed in 
    the diceCount property of the objects.
    3. Each dice should have the following HTML: <div class="dice">6</div>
    4. For now, each dice will display 6
    5. Swap out the diceRoll variable for diceHtml in the template
    */

    let diceHtml = ''

    for (let i = 0; i < diceCount; i++) {
        diceHtml += `<div class="dice">6</div>`
    }

    document.getElementById(elementId).innerHTML =
        `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                ${diceHtml}
            </div>
        </div>`
} //innen pedig törölrük a dice class div-be betételt, mert az a for loopban már benn van 

// Update this for loop so it uses a value from the 
// new diceRoll array to render out the dice so the 
// wizard's dice have values of 3, 1 and 4, and the
// orc's single dice has a value of 2.


for (let i = 0; i < diceRoll.length; i++) {
    diceHtml += `<div class="dice">${diceRoll[i]}</div>`
}
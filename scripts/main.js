import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
let fishDom = document.getElementById('fishList');
fishDom.innerHTML = fishHTML;

let tipDom = document.getElementById('tipList');
tipDom.innerHTML = tipHTML;

let locationDom = document.getElementById('locationList');
locationDom.innerHTML = locationHTML;
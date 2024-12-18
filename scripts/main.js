import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { holyFish } from './holyFish.js'
import { soldierFish, soldierFish } from './soldierFish.js'
import { regularFish } from './regularFish.js'

const hFish = holyFish()
const sFish = soldierFish()
const rFish = regularFish()
// Generate the fish list
const hFishHTML = fishList(hFish);
const sFishHTML = fishList(sFish);
const rFishHTML = fishList(rFish);

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
locationDom.innerHTML = locationHTML
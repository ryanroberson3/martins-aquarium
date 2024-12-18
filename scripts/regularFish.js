import { database } from './aquariumData.js';

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    const rFish = ""

    for (const fish of database.fish) {
        if (fish.length % 3 != 0 && fish.length % 5 != 0) {
            rFish += fish
        }
    } 

    return rFish
}
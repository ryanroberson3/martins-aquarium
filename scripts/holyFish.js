import { database } from './aquariumData.js';

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = ""

    for (const fish of database.fish) {
        if (fish.length % 3 === 0) {
            holyFish += fish
        }
    } 

    return holyFish
}

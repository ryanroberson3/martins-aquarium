import { database } from './aquariumData.js';

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const sFish = ""

    for (const fish of database.fish) {
        if (fish.length % 5 === 0) {
            soldierFish += fish
        }
    } 

    return sFish;
}
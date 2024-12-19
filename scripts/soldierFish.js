import { database } from './aquariumData.js';

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    return database.fish.filter(fish => fish.length % 5 === 0 && fish.length % 3 != 0);
}
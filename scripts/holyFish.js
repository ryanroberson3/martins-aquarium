import { database } from './aquariumData.js';

export const holyFish = () => {
    // 3, 6, 9, 12, etc... fish
    return database.fish.filter(fish => fish.length % 3 === 0);
}

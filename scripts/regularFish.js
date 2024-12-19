import { database } from './aquariumData.js';

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    return database.fish.filter(fish => fish.length % 3 !== 0 && fish.length % 5 !== 0);
}
import { database } from './aquariumData.js';

export const fishList = () => {
    let fishHTML = '';

    for (const f of database.fish) {
        fishHTML += `
            <article class="container">
                <img src ="${f.image}" alt="${f.name}" class="fish_name">
                <div class="card">
                    <h2 class="fish_name">${f.name}</h2>
                    <p><strong>Species:</strong>${f.species}</p>
                    <p><strong>Length:</strong>${f.length}</p>
                    <p><strong>Location:</strong>${f.location}</p>
                    <p><strong>Diet:</strong>${f.diet}</p>
                </div>
            </article>
        `;
                    
    }
    return fishHTML;
};
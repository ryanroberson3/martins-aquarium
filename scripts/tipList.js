import { database } from './aquariumData.js';

export const tipList = () => {
    let tipHTML = '';

    for (const tips of database.tips) {
        tipHTML += `
            <ul class="tips">
                <li class="tip">
                    <h2 class="tip_topic">${tips.topic}</h2>
                    <p class="tip_text">${tips.text}</p>
                </li>
            </ul>
        `;
    }

    return tipHTML;
}
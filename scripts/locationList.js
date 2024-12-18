import { database } from './aquariumData.js';

export const locationList = () => {
    let locationHTML = '';

    for (const locations of database.locations) {
        locationHTML += `
            <article class="locations">
                <section class="location">
                    <h2 class="location_name">${locations.name}</h2>
                    <p class="location_country">${locations.country}</p>
                    <p class="location_description">${locations.description}</p>
                </section>
            </article>
        `;
    }

    return locationHTML;
}
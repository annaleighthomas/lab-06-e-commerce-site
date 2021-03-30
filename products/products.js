import { plants } from '../products-data.js';
import { createPlants } from '../utils.js';


const ul = document.querySelector('.plant-list');

for (let eachPlant of plants) {
    const li = createPlants(eachPlant);
    ul.append(li);
}


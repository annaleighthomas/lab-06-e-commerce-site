import { plants } from '../products-data.js';
import { cart } from './cart-data.js';
import { createTableRow } from './render-line-items.js';
import { calcOrderTotal, findById } from '../utils.js';

const tBody = document.querySelector('tbody');



for (let cartItem of cart) {

    const selectedPlant = findById(plants, cartItem.id);

    const tr = createTableRow(cartItem, selectedPlant);

    tBody.append(tr);
}

const orderTotal = calcOrderTotal(cart, plants);

const tr = document.createElement('tr');

const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

td3.textContent = orderTotal.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
}); 

tr.append(td1, td2, td3);
tBody.append(tr);
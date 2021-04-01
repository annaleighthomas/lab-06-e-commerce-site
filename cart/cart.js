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

const totalRow = calcOrderTotal(cart, plants);

tBody.append(totalRow);
import { findById } from '../utils.js';

const CART = 'CART';

export function getCart() {
    const stringifyCart = localStorage.getItem(CART);
    const parsedCart = JSON.parse(stringifyCart);

    if (parsedCart) {
        return parsedCart;
    } else {
        return [];
    }
}

export function setCart(parsedCart) {
    const stringifyCart = JSON.stringify(parsedCart);

    localStorage.setItem(CART, stringifyCart);
}

export function addItemToCart(itemId) {
    
    const cart = getCart();
    
    const selectedItem = findById(cart, itemId);
    
    if (selectedItem) {
        selectedItem.quantity++;
    } else {
        const item = {
            id: itemId,
            quantity: 1
        };

        cart.push(item);
    }
    setCart(cart);
}
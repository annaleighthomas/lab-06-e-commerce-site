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

export function addItemToCart(itemId, quantity) {
    
    const cart = getCart();
    
    const selectedItem = findById(cart, itemId);
    
    if (selectedItem !== null) {
        selectedItem.quantity = selectedItem.quantity + quantity;
    } else {
        const item = {
            id: itemId,
            quantity: quantity
        };

        cart.push(item);
    }
    setCart(cart);
}
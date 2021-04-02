import { addItemToCart } from './cart/cart-api.js';

export function createPlants(plant){
    const li = document.createElement('li');

    li.classList.add('plant');

    const pId = document.createElement('p');

    pId.classList.add('id');

    const pName = document.createElement('p');

    pName.classList.add('name');
    pName.textContent = plant.name;

    const plantImage = document.createElement('img');

    plantImage.src = plant.image;

    const pDescription = document.createElement('p');

    pDescription.classList.add('description');
    pDescription.textContent = plant.description;

    const pCategory = document.createElement('p');

    pCategory.classList.add('category');
    pCategory.textContent = plant.category;

    const pSun = document.createElement('p');

    pSun.classList.add('sun');
    pSun.textContent = plant.sun;

    const pPrice = document.createElement('p');

    pPrice.classList.add('price');
    pPrice.textContent = plant.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    }); 

    const select = document.createElement('select');
    select.id = plant.id;

    const option = document.createElement('option');
    option.textContent = '1';
    const option2 = document.createElement('option');
    option2.textContent = '2';

    const button = document.createElement('button');

    button.value = plant.id;
    button.textContent = 'Add to Cart!';

    button.addEventListener('click', () => {
        addItemToCart(Number(button.value), Number(select.value));  
                                //1                    //1
        console.log(select.value);
    });

    select.append(option, option2);

    li.append(pName, plantImage, pDescription, pCategory, pSun, pPrice, button, select);


    return li;
}

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item; 
        }
    }
    return null;

}

export function calcItemTotal(quantity, amount) {
    const total = quantity * amount;
    return Math.round(total * 100) / 100;
}

export function calcOrderTotal(cartArray, plantArray) {
    let orderTotal = 0;

    for (let cartItem of cartArray) {
        const selectedPlant = findById(plantArray, cartItem.id);

        const plantSubtotal = calcItemTotal(cartItem.quantity, selectedPlant.price);

        orderTotal = orderTotal + plantSubtotal;
    }

    return orderTotal; 
}

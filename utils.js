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

    const pButton = document.createElement('button');

    pButton.textContent = 'Add to Cart!';

    li.append(pName, plantImage, pDescription, pCategory, pSun, pPrice, pButton);

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

        const plantSubtotal = selectedPlant.price * cartItem.quantity;

        orderTotal = orderTotal + plantSubtotal;
    }

    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    
    td3.textContent = `Total: $${orderTotal}.00`;

    tr.append(td1, td2, td3);

    return tr;
}
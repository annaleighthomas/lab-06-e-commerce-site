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

    li.append(pName, plantImage, pDescription, pCategory, pSun, pPrice);

    return li;
}
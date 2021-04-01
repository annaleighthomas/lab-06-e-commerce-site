export function createTableRow(cartItem, aPlant) {
   
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdName.textContent = aPlant.name;
    tdQuantity.textContent = cartItem.quantity;
    tdPrice.textContent = aPlant.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    }); 

    tr.append(tdName, tdQuantity, tdPrice);

    return tr;
}



export function createTableRow(cartItem, aPlant) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdRowTotal = document.createElement('td');

    tdName.textContent = aPlant.name;
    tdQuantity.textContent = cartItem.quantity;
    tdPrice.textContent = `$${aPlant.price}.00`;
    const rowTotal = aPlant.price * cartItem.quantity;
    
    const total = rowTotal.toLocaleString('en-US', 
        {
            currency: 'USD',
            style: 'currency'
        });
        
    tdRowTotal.textContent = total;

    tr.append(tdName, tdQuantity, tdPrice, tdRowTotal);

    return tr;
}


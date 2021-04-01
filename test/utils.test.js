// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById, calcItemTotal, calcOrderTotal } from '../utils.js';
import { createTableRow } from '../cart/render-line-items.js';
import { cart } from '../cart/cart-data.js';

const test = QUnit.test;

test('should take in a array and an id and if not found returns null', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = null;
    const array = [
        {
            id: 2,
            quantity: 3,
        }
    ];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(array, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});



test('takes in an array and id and returns an object', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 3
    };
    
    const array = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
    ];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(array, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('takes in an array and id and returns the first found id match', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 3,
        quantity: 2
    };
    
    const array = [
        {
            id: 3,
            quantity: 2
        },
        {
            id: 2,
        },
        {
            id: 3,
            quantity: 4
        },
    ];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(array, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should take in quantity and amount and return total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const quantity = 2;
    const amount = 3;

    const expected = 6;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(quantity, amount);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('take in a item and a product and create a row', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = `<tr><td>Monstera</td><td>3</td><td>$36.00</td></tr>`;
    const someProduct = {
        id: 1,
        name: 'Monstera',
        image: '../assets/monstera.jpeg',
        description: 'Vine like, evergreen plant, with large green split-leaves.',
        category: 'Monstera deliciosa', 
        sun: 'Bright indirect light', 
        price: 36,
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createTableRow(cart[0], someProduct);
    console.log(actual);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


test('takes cartArray and productArray and returns total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 15;
    const cartArray = [
        {
            id: 1,
            quantity: 3
        }
    ];

    const plantArray = [
        {
            id: 1,
            price: 5
        }
    ];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal(cartArray, plantArray);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});








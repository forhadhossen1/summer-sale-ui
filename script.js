

// let totalPrice = 0;

// function selectItem(headingId, price) {
//     const selectItemContainer = document.getElementById('item-list');
//     const headingItem = document.getElementById(headingId);
// const heading = headingItem.innerText;

//     const li = document.createElement('li');
// li.innerText = heading;
//     selectItemContainer.appendChild(li);

//     totalPrice += parseFloat(price);
//     document.getElementById('total-price').innerText = totalPrice.toFixed(2);
// }

// document.getElementById('k-accessories-wood').addEventListener('click', function() {
//     const headingId = 'item-heading';
//     const priceElement = document.getElementById('item-price');
//     const price = priceElement.innerText;
//     selectItem(headingId, price);
// });

// document.getElementById('kk-accessories-wood').addEventListener('click', function() {
//     const headingId = 'item-heading';
//     const priceElement = document.getElementById('items-price');
//     const price = priceElement.innerText;
//     selectItem(headingId, price);
// });


let totalPrice = 0;

function selectItem(heading, price) {
    const selectItemContainer = document.getElementById('item-list');
    const li = document.createElement('li');
    li.innerText = heading;
    selectItemContainer.appendChild(li);

    totalPrice += parseFloat(price);
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}

function setupItemClickEvent(cardId) {
    const card = document.getElementById(cardId);
    const heading = card.querySelector('.card-title').innerText;
    const price = card.querySelector('.item-price').innerText;

    card.addEventListener('click', function () {
        selectItem(heading, price);
    });
}



setupItemClickEvent('k-accessories-wood');
setupItemClickEvent('kk-accessories-wood');
setupItemClickEvent('home-cooker');
setupItemClickEvent('sports-cap');
setupItemClickEvent('sports-jersey');
setupItemClickEvent('sports-cates');
setupItemClickEvent('single-chair');
setupItemClickEvent('chilldren-chair');
setupItemClickEvent('flexible-sofa');

// .........purchase btn.......

function updatePurchaseButton() {
    const purchase = document.getElementById('purchase-btn');
    const priceTotal = parseFloat(document.getElementById('total-price').innerText);

    if (priceTotal > 0.00) {
        purchase.removeAttribute('disabled');
    } else {
        purchase.setAttribute('disabled', true);
    }
}

document.addEventListener('mouseover', function () {
    updatePurchaseButton();
})

// ...........apply btn........ 

function updateApplyButton() {
    const apply = document.getElementById('apply-btn');
    const priceTotal = parseFloat(document.getElementById('total-price').innerText);

    if (priceTotal >= 200) {
        apply.removeAttribute('disabled');
    } else {
        apply.setAttribute('disabled', true);
    }
}

document.addEventListener('mouseover', function () {
    updateApplyButton();
})

function updatePurchaseButton() {
    const purchase = document.getElementById('purchase-btn');
    const priceTotal = parseFloat(document.getElementById('total-price').innerText);
    const discountAmount = parseFloat(document.getElementById('discount-amount').innerText);
    const finalTotal = priceTotal - discountAmount;

    const finalPrice = document.getElementById('final-total');
    finalPrice.innerText = finalTotal;


    if (finalTotal > 0.00) {
        purchase.removeAttribute('disabled');
    } else {
        purchase.setAttribute('disabled', true);
    }
}


function applyCouponCode() {
    const couponCode = document.getElementById('apply-field').value;
    const priceTotal = parseFloat(document.getElementById('total-price').innerText);

    if (couponCode === 'SELL200' && priceTotal >= 200.00) {
        const discount = priceTotal * 0.2; // 20% discount
        const discountAmountElement = document.getElementById('discount-amount');
        discountAmountElement.innerText = discount.toFixed(2);

        updatePurchaseButton();
    }
}

const applyButton = document.getElementById('apply-btn');
applyButton.addEventListener('click', function () {
    applyCouponCode();
});


document.getElementById('go-home').addEventListener('click', function () {
    const cuponField = document.getElementById('apply-field');
    const cuponCode = cuponField.value;
    cuponField.value = '';

    const discountAmountElement = document.getElementById('discount-amount');
    discountAmountElement.innerText = 0;
    const priceTotal = document.getElementById('total-price');
    priceTotal.innerText = '0.00';

    const finalPrice = document.getElementById('final-total');
    finalPrice.innerText = '0.00';

    const itemList = document. getElementById('item-list');
    itemList.innerText = '';

    totalPrice = 0;
})
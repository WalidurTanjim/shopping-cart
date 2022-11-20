document.getElementById('phone-plus-btn').addEventListener('click', function(){
     const phoneQuantity = getInputValueById('phone-field', true);
     const phonePrice = phoneQuantity * 1219;

     setInnerTextById('phone-price', phonePrice);
})

document.getElementById('phone-minus-btn').addEventListener('click', function(){
     const phoneQuantity = getInputValueById('phone-field', false);
     const phonePrice = phoneQuantity * 1219;

     setInnerTextById('phone-price', phonePrice);
})
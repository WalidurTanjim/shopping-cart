document.getElementById('check-btn').addEventListener('click', function(){
     const phonePrice = getInnerTextById('phone-price');
     const casePrice = getInnerTextById('case-price');
     const totalPrice = phonePrice + casePrice;

     setInnerTextById('subtotal', totalPrice);

     const subtotal = getInnerTextById('subtotal');
     const tax = subtotal / 100 * 15;
     const taxToFixed = tax.toFixed(2);
     const taxNumber = parseFloat(taxToFixed);
     setInnerTextById('tax', taxNumber);

     const total = subtotal + taxNumber;
     setInnerTextById('total', total);
})
document.getElementById('case-plus-btn').addEventListener('click', function(){
     const caseQuantity = getInputValueById('case-field', true);
     const casePrice = caseQuantity * 59;

     setInnerTextById('case-price', casePrice);
})

document.getElementById('case-minus-btn').addEventListener('click', function(){
     const caseQuantity = getInputValueById('case-field', false);
     const casePrice = caseQuantity * 59;

     setInnerTextById('case-price', casePrice);
})
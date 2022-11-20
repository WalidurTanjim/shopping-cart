function getInputValueById(fieldId, isIncrease){
     const inputField = document.getElementById(fieldId);
     const inputFieldValue = inputField.value;
     const inputFieldValueNumber = parseInt(inputFieldValue);
     
     if(isIncrease){
          const newValue = inputFieldValueNumber + 1;
          const totalValue = inputField.value = newValue;
          return totalValue;
     }else{
          if(inputFieldValueNumber < 1){
               alert("You can't decrease more");
               return false;
          }else{
               const newValue = inputFieldValueNumber - 1;
               const total = inputField.value = newValue;
               return total;
          }
     }
}

function getInnerTextById(elementId){
     const element = document.getElementById(elementId);
     const elementValue = element.innerText;
     const elementValueNumber = parseFloat(elementValue);
     return elementValueNumber;
}

function setInnerTextById(elementId, values){
     const element = document.getElementById(elementId);
     element.innerText = values;
}
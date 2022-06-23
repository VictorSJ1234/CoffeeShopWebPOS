/*PRODUCT SELECTION*/
/*coffee1*/
const coffee1 = document.querySelector('#coffee1Modal');
const coffee1Photo = document.querySelector('#coffee1');
const coffee1Button = document.querySelector('#coffee1Button');
const coffee1Close = document.querySelector('#closeCoffee1');

coffee1Button.addEventListener('click', openCoffee1);
function openCoffee1(){
  coffee1.style.display = 'block';
}
coffee1Photo.addEventListener('click', openCoffee1);
function openCoffee1(){
  coffee1.style.display = 'block';
}

coffee1Close.addEventListener('click', closeCoffee1);
function closeCoffee1(){
  coffee1.style.display = 'none';
}

window.addEventListener('click', outsideClick1);
function outsideClick1(e){
  if (e.target == coffee1){
    coffee1.style.display = 'none';
  }
}

/*coffee2*/
const coffee2 = document.querySelector('#coffee2Modal');
const coffee2Photo = document.querySelector('#coffee2');
const coffee2Button = document.querySelector('#coffee2Button');
const coffee2Close = document.querySelector('#closeCoffee2');

coffee2Button.addEventListener('click', openCoffee2);
function openCoffee2(){
  coffee2.style.display = 'block';
}
coffee2Photo.addEventListener('click', openCoffee2);
function openCoffee2(){
  coffee2.style.display = 'block';
}

coffee2Close.addEventListener('click', closeCoffee2);
function closeCoffee2(){
  coffee2.style.display = 'none';
}

window.addEventListener('click', outsideClick2);
function outsideClick2(e){
  if (e.target == coffee2){
    coffee2.style.display = 'none';
  }
}

/*coffee3*/
const coffee3 = document.querySelector('#coffee3Modal');
const coffee3Photo = document.querySelector('#coffee3');
const coffee3Button = document.querySelector('#coffee3Button');
const coffee3Close = document.querySelector('#closeCoffee3');

coffee3Button.addEventListener('click', openCoffee3);
function openCoffee3(){
  coffee3.style.display = 'block';
}
coffee3Photo.addEventListener('click', openCoffee3);
function openCoffee3(){
  coffee3.style.display = 'block';
}

coffee3Close.addEventListener('click', closeCoffee3);
function closeCoffee3(){
  coffee3.style.display = 'none';
}

window.addEventListener('click', outsideClick3);
function outsideClick3(e){
  if (e.target == coffee3){
    coffee3.style.display = 'none';
  }
}

/*coffee4*/
const coffee4 = document.querySelector('#coffee4Modal');
const coffee4Photo = document.querySelector('#coffee4');
const coffee4Button = document.querySelector('#coffee4Button');
const coffee4Close = document.querySelector('#closeCoffee4');

coffee4Button.addEventListener('click', openCoffee4);
function openCoffee4(){
  coffee4.style.display = 'block';
}
coffee4Photo.addEventListener('click', openCoffee4);
function openCoffee4(){
  coffee4.style.display = 'block';
}

coffee4Close.addEventListener('click', closeCoffee4);
function closeCoffee4(){
  coffee4.style.display = 'none';
}
window.addEventListener('click', outsideClick4);
function outsideClick4(e){
  if (e.target == coffee4){
    coffee4.style.display = 'none';
  }
}

/*coffee5*/
const coffee5 = document.querySelector('#coffee5Modal');
const coffee5Photo = document.querySelector('#coffee5');
const coffee5Button = document.querySelector('#coffee5Button');
const coffee5Close = document.querySelector('#closeCoffee5');

coffee5Button.addEventListener('click', openCoffee5);
function openCoffee5(){
  coffee5.style.display = 'block';
}
coffee5Photo.addEventListener('click', openCoffee5);
function openCoffee5(){
  coffee5.style.display = 'block';
}

coffee5Close.addEventListener('click', closeCoffee5);
function closeCoffee5(){
  coffee5.style.display = 'none';
}

window.addEventListener('click', outsideClick5);
function outsideClick5(e){
  if (e.target == coffee5){
    coffee5.style.display = 'none';
  }
}

/*coffee6*/
const coffee6 = document.querySelector('#coffee6Modal');
const coffee6Photo = document.querySelector('#coffee6');
const coffee6Button = document.querySelector('#coffee6Button');
const coffee6Close = document.querySelector('#closeCoffee6');

coffee6Button.addEventListener('click', openCoffee6);
function openCoffee6(){
  coffee6.style.display = 'block';
}
coffee6Photo.addEventListener('click', openCoffee6);
function openCoffee6(){
  coffee6.style.display = 'block';
}

coffee6Close.addEventListener('click', closeCoffee6);
function closeCoffee6(){
  coffee6.style.display = 'none';
}

window.addEventListener('click', outsideClick6);
function outsideClick6(e){
  if (e.target == coffee6){
    coffee6.style.display = 'none';
  }
}



/*for total, subtotal, etc...*/
let setSubtotal = document.querySelector('#subtotal');
let setTotal = document.querySelector('#totalAmount');
let cash = document.querySelector('#cash').value;
let change = document.querySelector('#change').value;
let computeButton = document.querySelector('#computeButton').value;

/*for TABLES*/
let table = document.querySelector('.table1');

//modals for errors
//NO INPUT ERROR
const noInputError = document.querySelector('#noInputModal');
const closeNoInputModal = document.querySelector('#closeNoInputModal');
const backButton = document.querySelector('#backButton');

backButton.addEventListener('click', ()=>{
  noInputError.style.display = 'none';
});

closeNoInputModal.addEventListener( 'click', ()=>{
  noInputError.style.display = 'none'
});

window.addEventListener('click', outsideClickError1);
function outsideClickError1(e){
  if (e.target == noInputError){
    noInputError.style.display = 'none';
  }
}

//INSUFFICIENT AMOUNT ERROR
const insufficient = document.querySelector('#insufficientAmountModal');
const closeInsuffiscientError = document.querySelector('#closeInsufficientError');
const backButton2 = document.querySelector('#backButton2');

backButton2.addEventListener('click', ()=>{
  insufficient.style.display = 'none';
});
closeInsuffiscientError.addEventListener('click', ()=>{
  insufficient.style.display = 'none';
});

window.addEventListener('click', outsideClickError2);
function outsideClickError2(e){
  if (e.target == insufficient){
    insufficient.style.display = 'none';
  }
}


/*coffee1*/
let confirmButton1 = document.querySelector('#confirmButton1');
let coffee1Quantity = document.querySelector('#coffee1Quantity');

confirmButton1.addEventListener('click', () =>{
  let getSubtotal = document.querySelector('#subtotal').value;
  let subtotal = Number(getSubtotal); 
  let coffee1Code = Number(101);
  let coffee1Name = "AMERICANO";
  let price1 = Number(200);
  let quantity1 = coffee1Quantity.value;
  let total1 = price1 * quantity1;
  let subtotalAmount = subtotal + total1;
  let totalAmount = (subtotalAmount * 0.12)+subtotalAmount;

  if(total1==0){
    noInputError.style.display = 'block';
  }
  else{
    let template = `
                  <tr>
                      <td>${coffee1Code}</td>
                      <td>${coffee1Name}</td>
                      <td>${price1}</td>
                      <td>${quantity1}</td>
                      <td>${total1}</td>
                  </tr>`;
      table.innerHTML += template;
      setSubtotal.value = subtotalAmount;
      setTotal.value = totalAmount;
      coffee1.style.display = 'none';
      coffee1Quantity.value = '';
  }
});


/*coffee2*/
let confirmButton2 = document.querySelector('#confirmButton2');
let coffee2Quantity = document.querySelector('#coffee2Quantity');

confirmButton2.addEventListener('click', () =>{
  let getSubtotal = document.querySelector('#subtotal').value;
  let subtotal = Number(getSubtotal); 
  let coffee2Code = Number(102);
  let coffee2Name = "2X ESPRESSO";
  let price2 = Number(250);
  let quantity2 = coffee2Quantity.value;
  let total2 = price2 * quantity2;
  let subtotalAmount = subtotal + total2;
  let totalAmount = (subtotalAmount * 0.12)+subtotalAmount;

  if(total2==0){
    noInputError.style.display = 'block';
  }

  else{
    let template = `
                  <tr>
                      <td>${coffee2Code}</td>
                      <td>${coffee2Name}</td>
                      <td>${price2}</td>
                      <td>${quantity2}</td>
                      <td>${total2}</td>
                  </tr>`;
      table.innerHTML += template;
      setSubtotal.value = subtotalAmount;
      setTotal.value = totalAmount;
      coffee2.style.display = 'none';
      coffee2Quantity.value = '';
  }
});

/*coffee3*/
let confirmButton3 = document.querySelector('#confirmButton3');
let coffee3Quantity = document.querySelector('#coffee3Quantity');

confirmButton3.addEventListener('click', () =>{
  let getSubtotal = document.querySelector('#subtotal').value;
  let subtotal = Number(getSubtotal); 
  let coffee3Code = Number(103);
  let coffee3Name = "BLACK EYE";
  let price3 = Number(300);
  let quantity3 = coffee3Quantity.value;
  let total3 = price3 * quantity3;
  let subtotalAmount = subtotal + total3;
  let totalAmount = (subtotalAmount * 0.12)+subtotalAmount;

  if(total3==0){
    noInputError.style.display = 'block';
  }

  else{
    let template = `
                  <tr>
                      <td>${coffee3Code}</td>
                      <td>${coffee3Name}</td>
                      <td>${price3}</td>
                      <td>${quantity3}</td>
                      <td>${total3}</td>
                  </tr>`;
      table.innerHTML += template;
      setSubtotal.value = subtotalAmount;
      setTotal.value = totalAmount;
      coffee3.style.display = 'none';
      coffee3Quantity.value = '';
  }
});

/*coffee4*/
let confirmButton4 = document.querySelector('#confirmButton4');
let coffee4Quantity = document.querySelector('#coffee4Quantity');

confirmButton4.addEventListener('click', () =>{
  let getSubtotal = document.querySelector('#subtotal').value;
  let subtotal = Number(getSubtotal); 
  let coffee4Code = Number(104);
  let coffee4Name = "RED EYE";
  let price4 = Number(300);
  let quantity4 = coffee4Quantity.value;
  let total4 = price4 * quantity4;
  let subtotalAmount = subtotal + total4;
  let totalAmount = (subtotalAmount * 0.12)+subtotalAmount;

  if(total4==0){
    noInputError.style.display = 'block';
  }

  else{
    let template = `
                  <tr>
                      <td>${coffee4Code}</td>
                      <td>${coffee4Name}</td>
                      <td>${price4}</td>
                      <td>${quantity4}</td>
                      <td>${total4}</td>
                  </tr>`;
      table.innerHTML += template;
      setSubtotal.value = subtotalAmount;
      setTotal.value = totalAmount;
      coffee4.style.display = 'none';
      coffee4Quantity.value = '';
  }
});

/*coffee5*/
let confirmButton5 = document.querySelector('#confirmButton5');
let coffee5Quantity = document.querySelector('#coffee5Quantity');

confirmButton5.addEventListener('click', () =>{
  let getSubtotal = document.querySelector('#subtotal').value;
  let subtotal = Number(getSubtotal); 
  let coffee5Code = Number(105);
  let coffee5Name = "ESPRESSO";
  let price5 = Number(300);
  let quantity5 = coffee5Quantity.value;
  let total5 = price5 * quantity5;
  let subtotalAmount = subtotal + total5;
  let totalAmount = (subtotalAmount * 0.12)+subtotalAmount;

  if(total5==0){
    noInputError.style.display = 'block';
  }

  else{
    let template = `
                  <tr>
                      <td>${coffee5Code}</td>
                      <td>${coffee5Name}</td>
                      <td>${price5}</td>
                      <td>${quantity5}</td>
                      <td>${total5}</td>
                  </tr>`;
      table.innerHTML += template;
      setSubtotal.value = subtotalAmount;
      setTotal.value = totalAmount;
      coffee5.style.display = 'none';
      coffee5Quantity.value = '';
  }
});

/*coffee6*/
let confirmButton6 = document.querySelector('#confirmButton6');
let coffee6Quantity = document.querySelector('#coffee6Quantity');

confirmButton6.addEventListener('click', () =>{
  let getSubtotal = document.querySelector('#subtotal').value;
  let subtotal = Number(getSubtotal); 
  let coffee6Code = Number(106);
  let coffee6Name = "MACCHIATO";
  let price6 = Number(300);
  let quantity6 = coffee6Quantity.value;
  let total6 = price6 * quantity6;
  let subtotalAmount = subtotal + total6;
  let totalAmount = (subtotalAmount * 0.12)+subtotalAmount;

  if(total6==0){
    noInputError.style.display = 'block';
  }

  else{
    let template = `
                  <tr>
                      <td>${coffee6Code}</td>
                      <td>${coffee6Name}</td>
                      <td>${price6}</td>
                      <td>${quantity6}</td>
                      <td>${total6}</td>
                  </tr>`;
      table.innerHTML += template;
      setSubtotal.value = subtotalAmount;
      setTotal.value = totalAmount;
      coffee6.style.display = 'none';
      coffee6Quantity.value = '';
  }
});



/*for cancel button*/
let cancel = document.querySelector('#cancelButton');
cancel.addEventListener( 'click', ()=>{
  let subtotal = document.querySelector('#subtotal');
  let initialTotal = document.querySelector('#totalAmount').value;
  let clearTotal = document.querySelector('#totalAmount');
  let clearCash = document.querySelector('#cash');
  let clearChange = document.querySelector('#change');

  if(initialTotal=0){

  }
  else{
    table.innerHTML = "";
    let template = `
                    <tr>
                        <th>${"Code:"}</th>
                        <th>${"Product Name:"}</th>
                        <th>${"Price"}</th>
                        <th>${"Quantity"}</th>
                        <th>${"Total Amount:"}</th>
                    </tr>`;
    table.innerHTML += template;
    clearTotal.value = 0;
    subtotal.value = '';
    clearCash.value = '';
    clearChange.value = '';
  }
});

//for computation of change // for change button
let computeChangeButton = document.querySelector('#computeButton');

let setChange = document.querySelector('#change');

computeChangeButton.addEventListener( 'click', ()=>{
  let finalTotalAmount = document.querySelector('#totalAmount').value;
  finalTotalAmount = Number(finalTotalAmount);


  let amountPaid = document.querySelector('#cash').value;
  amountPaid = Number(amountPaid);
  let change = amountPaid - finalTotalAmount;

  if (amountPaid<finalTotalAmount){
    insufficient.style.display = 'block';
  }
  else{
    setChange.value = change;
  }

});


//for paymodal
let payButton = document.querySelector('#payButton');
let payModal = document.querySelector('#payModal');
let closePayModal =document.querySelector('#closePayModal');
let backPayModal = document.querySelector('#backButton3')


payButton.addEventListener( 'click', ()=>{
  let finalTotalAmount = document.querySelector('#totalAmount').value;
  finalTotalAmount = Number(finalTotalAmount);


  let amountPaid = document.querySelector('#cash').value;
  amountPaid = Number(amountPaid);
  let change = amountPaid - finalTotalAmount;
  let getTotal = document.querySelector('#totalAmount').value;
  getTotal = Number(getTotal); 

  if(getTotal==0){
    emptyError.style.display = 'block';
  }
  else if (amountPaid<finalTotalAmount){
    insufficient.style.display = 'block';
  }
  else{
    let totalModal = document.querySelector('#totalModal');
    let changeModal = document.querySelector('#changeModal');

    totalModal.innerHTML = ("TOTAL: " + getTotal);
    changeModal.innerHTML = ("CHANGE: " + change);
    
    payModal.style.display = 'block';
  }
});

closePayModal.addEventListener( 'click', ()=>{
  payModal.style.display = 'none';
});

backPayModal.addEventListener( 'click', ()=>{
  payModal.style.display = 'none';

});
window.addEventListener('click', outsideClickPay);
function outsideClickPay(e){
  if (e.target == payModal){
    payModal.style.display = 'none';
  }
}

//payment confirmation
let confirmPayment = document.querySelector('#payButtonModal')

//FOR THANK YOU MODAL
let paid = document.querySelector('#paidModal');
let newTransaction = document.querySelector('#new');
 
confirmPayment.addEventListener('click', ()=>{
  paid.style.display='block';
});

newTransaction.addEventListener('click', ()=>{
  window.location.reload();

});

//if the table is empty
let emptyError = document.querySelector('#emptyTableModal');
let backButton4 = document.querySelector('#backButton4');
let closeEmptyTableError = document.querySelector('#closeEmptyTableModal');

backButton4.addEventListener('click', ()=>{
  emptyError.style.display = 'none';
});
closeEmptyTableError.addEventListener('click', ()=>{
  emptyError.style.display = 'none';
});
window.addEventListener('click', outsideEmptyTableError);
function outsideEmptyTableError(e){
  if (e.target == emptyError){
    emptyError.style.display = 'none';
  }
}





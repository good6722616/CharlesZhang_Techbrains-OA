const form = document.getElementById('form');
const fname_input = document.getElementById("fname");
const lname_input = document.getElementById("lname");
const email_input = document.getElementById("email");
const phone_input = document.getElementById("phone");
const table_display = document.getElementById("table");
const image_input = document.querySelector("#image_input");



document.getElementById("display").addEventListener("click", function () {
    "use strict";
    var newRow = table_display.insertRow(-1);
    var newCell = newRow.insertCell(0);
    var newText = document.createTextNode(lname_input.value + ", " + fname_input.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(1);
    newText = document.createTextNode(email_input.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(2);
    newText = document.createTextNode(phone_input.value);
    newCell.appendChild(newText);
    fname_input.value = "";
    lname_input.value = "";
    phone_input.value = "";
    table_display.value = "";
});


//show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className='form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML= message;
}


//show succes outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}



//check email is valid
function checkEmail(email){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(email.value.trim())){
        showSuccess(email);

    }else{
        showError(email_input, 'Email is not valid');
    }

}


//check required fields
function checkRequired(inputArr){
    inputArr.forEach((input)=>{
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} cannot be empty`);
        } else{
            showSuccess(input);
        }
    });
}





image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});


// Get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('click', function(e) {
    e.preventDefault();
    checkRequired([lname_input, email_input, phone_input]);
    checkEmail(email_input);
});
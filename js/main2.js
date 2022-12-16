

// function sendEmail(){
//     let params = {
//         from_name : document.getElementById('user').value,
//         email_id :  document.getElementById('email').value,
//         message  :  document.getElementById('message').value

//     }

//     emailjs.send('service_nnkfvu5', 'template_e5a64l8', params)
//     .then(function(response) {
//         alert('SUCCESS!', response.status, response.text);
//     });
// }


function formValidate(){
    let username = document.getElementById('username').value;
    //store value in user name
    let email = document.getElementById('email').value;
        //store value in email
    let phone = document.getElementById('phone').value;
            //store value in phone
    let erorr = document.getElementById('erorr')
    let erorr1 = document.getElementById('erorr1')
    let erorr2 = document.getElementById('erorr2')


    if(username.length < 5){
        //ERORR
        erorr.innerHTML = 'Enter valid Username';
        erorr1.innerHTML = '';
        erorr2.innerHTML = '';
        return false;

    }
    else if(email.indexOf('@') ==  -1 || email.length < 10 ){
        //ERORR
        erorr1.innerHTML = 'Enter valid email';
        erorr2.innerHTML = '';
        erorr.innerHTML = '';
        return false;


    }
    else if(phone.length != 11 || isNaN(phone) ){
        //ERORR
        erorr2.innerHTML = 'Enter Valid password (mut be numbers only and minimum 10 numbers !)';
        erorr.innerHTML = '';
        erorr1.innerHTML = '';
        return false;


    }
    else{
        return true;

    }
}

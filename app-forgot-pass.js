let arrStr = JSON.parse(localStorage.getItem('key'));
let indexForgot;
// console.log(arrStr[0].name);
// console.log(arrStr);
// localStorage.removeItem('key');
// Program for login

let eventReset = document.getElementById("reset");
eventReset.addEventListener('click',myFunctionReset);

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function checkUser(str,arrUser){
    let newArr1=[];
   
    for(let i=0; i<arrUser.length;i++){
        newArr1.push(arrUser[i].email);
        
    }
    if(validateEmail(str) === true){
        if(newArr1.indexOf(str) !== -1){
            indexForgot = newArr1.indexOf(str);
            return true;
        }
        else{
            return false;
        }
    }else{
        return false;
    }
}

function myFunctionReset(){
    let getEmail = document.querySelector('.forgot-input-email').value;
    let messageUser= document.getElementById('infor-email');

    if(getEmail ===""){
       messageUser.innerHTML ='Vui lòng nhập email hợp lệ';
       
    }
    else{
        if(checkUser(getEmail,arrStr) === false){
            messageUser.innerHTML ='Định dạng email của bạn không hợp lệ, hoặc email không đúng';
        }
        else{
            messageUser.innerHTML ='';
            window.location.assign('index-reset-pass.html');
            localStorage.setItem('indexForgot',indexForgot);
        }
    }
}
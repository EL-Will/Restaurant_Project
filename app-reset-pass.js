
let arrStr = JSON.parse(localStorage.getItem('key'));
// console.log(arrStr);

let eventReset = document.getElementById("reset");
eventReset.addEventListener('click',myFunctionReset);

let indexCurrentPass = Number(JSON.parse(localStorage.getItem('indexForgot')));
// console.log(indexCurrentPass);
document.querySelector('.current-pass').value = arrStr[indexCurrentPass].pass;

function checkPass(str){
    
    if(str.length >4 && str !== arrStr[indexCurrentPass].pass){
        return true;
    }else{
        return false;
    }
}


function myFunctionReset(){
    let getNewPass = document.querySelector('.new-pass').value;
    let messagePass= document.getElementById('infor-new-pass');

    if(getNewPass ===""){
       messagePass.innerHTML ='Mật khẩu của bạn phải chứa từ 4-60 ký tự';
    }
   
    else if(getNewPass !==""){
        if(checkPass(getNewPass) === true){
            let arrStr = JSON.parse(localStorage.getItem('key'));
            arrStr[indexCurrentPass].pass = getNewPass;
            let strPassUser =JSON.stringify(arrStr);
            localStorage.setItem('key',strPassUser);
            window.location.assign('index-login.html')
        }
        else{
            messagePass.innerHTML ='Mật khẩu của bạn phải chứa từ 4-60 ký tự, không được trùng với mật khẩu cũ';
        }
    }
   
}
let idChangePass = document.getElementById('change');
idChangePass.addEventListener('click', functionChangePass);

function checkCurrentPass(currentPass, arrUser, index) {
    if (currentPass === arrUser[index].pass) {
        return true;
    }
    else {
        return false;
    }
}
function validNewPassConfirmPass(currentPass, newPass, confirmPass) {
    if (currentPass === newPass) {
        return false;
    }
    else {
        if (newPass.length < 8 || newPass.indexOf(" ") !== -1) {
            return 1;
        }
        else {
            if (newPass !== confirmPass) {
                return 2;
            }
            else {
                return true;
            }
        }
    }
}

function functionChangePass() {
    let getCurrentPass = document.querySelector('.current-pass').value;
    let getNewPass = document.querySelector('.input-new-pass').value;
    let getConfirmPass = document.querySelector('.input-confirm-pass').value;

    let messageCurrentPass = document.getElementById('current-pass');
    let messageNewPass = document.getElementById('new-pass');
    let messageConfirmPass = document.getElementById('confirm-pass');

    let strIndex = localStorage.getItem('userLogin');
    if (strIndex === null) {

    }
    else {
        let indexUsername = Number(strIndex);
        let arrUser = JSON.parse(localStorage.getItem('key'));

        if (getCurrentPass === '' && getNewPass === '' && getConfirmPass === '') {
            messageCurrentPass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự';
            messageNewPass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự';
            messageConfirmPass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự';
        }
        else if (getCurrentPass !== '' && getNewPass === '' && getConfirmPass === '') {
            messageCurrentPass.innerHTML = '';
            messageNewPass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự';
            messageConfirmPass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự';
        }
        else if (getCurrentPass === '' && getNewPass !== '' && getConfirmPass === '') {
            messageCurrentPass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự';
            messageNewPass.innerHTML = '';
            messageConfirmPass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự';
        }
        else if (getCurrentPass === '' && getNewPass === '' && getConfirmPass !== '') {
            messageCurrentPass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự';
            messageNewPass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự';
            messageConfirmPass.innerHTML = '';
        }
        else if (getCurrentPass !== '' && getNewPass !== '' && getConfirmPass === '') {
            messageCurrentPass.innerHTML = '';
            messageNewPass.innerHTML = '';
            messageConfirmPass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự';
        }
        else if (getCurrentPass !== '' && getNewPass === '' && getConfirmPass !== '') {
            messageCurrentPass.innerHTML = '';
            messageNewPass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự';
            messageConfirmPass.innerHTML = '';
        }
        else if (getCurrentPass === '' && getNewPass !== '' && getConfirmPass !== '') {
            messageCurrentPass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự';
            messageNewPass.innerHTML = '';
            messageConfirmPass.innerHTML = '';
        }
        else {
            if (checkCurrentPass(getCurrentPass, arrUser, indexUsername) === false) {
                messageCurrentPass.innerHTML = 'Mật khẩu không chính xác';
                messageNewPass.innerHTML = '';
                messageConfirmPass.innerHTML = '';
            }
            else {
                if (validNewPassConfirmPass(getCurrentPass, getNewPass, getConfirmPass) === false) {
                    messageNewPass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự và không được trùng với mật khẩu cũ';
                    messageCurrentPass.innerHTML = '';
                    messageConfirmPass.innerHTML = '';
                }
                else if (validNewPassConfirmPass(getCurrentPass, getNewPass, getConfirmPass) === 1) {
                    messageNewPass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự';
                    messageCurrentPass.innerHTML = '';
                    messageConfirmPass.innerHTML = '';
                }
                else if (validNewPassConfirmPass(getCurrentPass, getNewPass, getConfirmPass) === 2) {
                    messageNewPass.innerHTML = '';
                    messageCurrentPass.innerHTML = '';
                    messageConfirmPass.innerHTML = 'Mật khẩu không trùng khớp';
                }
                else {
                    messageCurrentPass.innerHTML = '';
                    messageNewPass.innerHTML = '';
                    messageConfirmPass.innerHTML = '';
                    arrUser[indexUsername].pass = getNewPass;
                    let strUser = JSON.stringify(arrUser);
                    localStorage.setItem('key',strUser);
                    localStorage.setItem("boolLogin", "false");
                    window.location.assign('index-login.html')
                }
            }
        }
    }
}

function showCurrentPass(){
    var x = document.querySelector(".current-pass");


    var eye = document.getElementById('eye-currentPass');
    eye.removeAttribute("class");

    if (x.type === "password") {
        x.type = "text";
        eye.setAttribute("class", 'fa-regular fa-eye eye-box');

    } else {
        x.type = "password";
        eye.setAttribute("class", 'fa-regular fa-eye-slash eye-box');
    }
}

function showNewPass() {
    var x = document.querySelector(".input-new-pass");
    var eye = document.getElementById('eye-newPass');
    eye.removeAttribute("class");

    if (x.type === "password") {
        x.type = "text";
        eye.setAttribute("class", 'fa-regular fa-eye eye-box-confirm');
    } else {
        x.type = "password";
        eye.setAttribute("class", 'fa-regular fa-eye-slash eye-box-confirm');
    }
}

function showConfirmPass() {
    var x = document.querySelector(".input-confirm-pass");
    var eye = document.getElementById('eye-confirmPass');
    eye.removeAttribute("class");

    if (x.type === "password") {
        x.type = "text";
        eye.setAttribute("class", 'fa-regular fa-eye eye-box-confirm');
    } else {
        x.type = "password";
        eye.setAttribute("class", 'fa-regular fa-eye-slash eye-box-confirm');
    }
}
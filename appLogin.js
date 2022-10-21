let indexUsername;

// Program for login

let eventLogin = document.getElementById("login");
eventLogin.addEventListener('click', myFunctionLogin);

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function checkEmail(str) {
    // let arr = Array.from(str)
    if (validateEmail(str) == true) {
        return true;
    } else {
        return false;
    }
}
// && newArr2.indexOf(str2) !== -1 && newArr1.indexOf(str1) === newArr2.indexOf(str2)

function validUserPass(str1, str2, arr) {
    let newArr1 = [];
    let newArr2 = [];
    for (let i = 0; i < arr.length; i++) {
        newArr1.push(arr[i].email);
        newArr2.push(arr[i].pass);
    }
    if (newArr1.indexOf(str1) !== -1) {
        indexUsername = newArr1.indexOf(str1);
        if (str2 === newArr2[indexUsername]) {
            localStorage.setItem('userLogin', indexUsername);
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

function myFunctionLogin() {
    let arrStr = JSON.parse(localStorage.getItem('key'));
    let getEmail = document.querySelector('.inputEmail').value;
    let getPass = document.querySelector('.inputPass').value;
    let messageEmail = document.getElementById('inforEmail');
    let messagePass = document.getElementById('inforPass');
    // console.log(validUserPass(getEmail,getPass,arrStr));
    // console.log(checkEmail(getEmail));
    if (arrStr === null) {
        messageEmail.innerHTML = 'Tài khoản không tồn tại, mời bạn đăng ký tài khoản!';
    }
    else {
        if (getEmail === "" && getPass === "") {
            messageEmail.innerHTML = 'Vui lòng nhập email hợp lệ';
            messagePass.innerHTML = 'Mật khẩu của bạn phải chứa từ 4-60 ký tự';
        }
        else if (getPass === "" && getEmail !== "") {
            messagePass.innerHTML = 'Mật khẩu của bạn phải chứa từ 4-60 ký tự';
            if (checkEmail(getEmail) === false) {
                messageEmail.innerHTML = 'Định dạng email của bạn không hợp lệ';
            }
        }
        else if (getPass !== "" && getEmail === "") {
            messageEmail.innerHTML = 'Vui lòng nhập email hợp lệ';
        }
        else if (getEmail !== "" && getPass !== "") {
            if (checkEmail(getEmail) === false) {
                messageEmail.innerHTML = 'Định dạng email của bạn không hợp lệ';
                messagePass.innerHTML = "";
            }
            else {
                console.log(validUserPass(getEmail, getPass, arrStr))
                if (validUserPass(getEmail, getPass, arrStr) === true) {
                    messageEmail.innerHTML = '';
                    messagePass.innerHTML = '';
                    document.cookie = `user = ${getEmail}`;
                    window.location.assign("indexLogoutMenu.html");
                    localStorage.setItem('boolLogin', "true");
                }
                else {
                    messageEmail.innerHTML = 'Email hoặc mật khẩu của bạn chưa chính xác';
                    messagePass.innerHTML = 'Email hoặc mật khẩu của bạn chưa chính xác';
                }
            }
        }
    }
}

function showPass() {
    var x = document.querySelector(".inputPass");
    var eye = document.getElementById('eye');
    eye.removeAttribute("class");

    if (x.type === "password") {
        x.type = "text";
        eye.setAttribute("class", 'fa-regular fa-eye eye-box');
    } else {
        x.type = "password";
        eye.setAttribute("class", 'fa-regular fa-eye-slash eye-box');
    }
}
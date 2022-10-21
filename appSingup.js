
let eventSingup = document.getElementById("Singup");
eventSingup.addEventListener('click', myFunctionSingup);

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function checkEmail(str, arrUser) {
    let newArr1 = [];
    // let arr = Array.from(str)
    for (let i = 0; i < arrUser.length; i++) {
        newArr1.push(arrUser[i].email);
    }
    if (validateEmail(str) === true) {
        if (newArr1.indexOf(str) === -1) {
            return true;
        }
        else {
            return false;
        }
    } else {
        return false;
    }
}

function validEmail(str) {
    if (validateEmail(str) === true) {
        return true;
    }
    else {
        return false;
    }
}
function checkUsername(userName, arrUser) {
    let newArr1 = [];
    for (let i = 0; i < arrUser.length; i++) {
        newArr1.push(arrUser[i].name);
    }

    if (newArr1.indexOf(userName) === -1) {
        return true;
    }
    else {
        return false;
    }

}
function checkPass(str) {

    if (str.length < 8 || str.indexOf(" ") !== -1) {
        return false;
    } else {
        return true;
    }
}
function checkConfirmpass(str, str2) {
    if (str === str2) {
        return true;
    }
    else {
        return false;
    }
}

function validEmailPass(str1, str2, arr) {
    let newArr1 = [];
    let newArr2 = [];
    for (let i = 0; i < arr.length; i++) {
        newArr1.push(arr[i].email);
        newArr2.push(arr[i].pass);
    }
    if (newArr1.indexOf(str1) !== -1 && newArr2.indexOf(str2) !== -1 && newArr1.indexOf(str1) === newArr2.indexOf(str2)) {
        return true;
    }
    else {
        return false;
    }
}
let data, strData, nameCity, nameDistrict, nameWard, indexCity = 0, indexDistrict = 0, indexWard = 0;
function myFunctionSingup() {
    let arrStr = JSON.parse(localStorage.getItem('key'));
    if (arrStr === null) {
        let Arr = [];
        let strArr = JSON.stringify(Arr);
        localStorage.setItem('key', strArr);

    }
    else {
        arrStr = JSON.parse(localStorage.getItem('key'));
    }
    let getUser = document.querySelector('.singup-input-User').value;
    let getEmail = document.querySelector('.singup-input-email').value;
    let getPass = document.querySelector('.singup-input-Pass').value;
    let getConfirmpass = document.querySelector('.singup-input-confirmPass').value;

    let messageUser = document.getElementById('error-user-name');
    let messageEmail = document.getElementById('error-email');
    let messagePass = document.getElementById('error-pass');
    let messageConfirmpass = document.getElementById('error-confirm-pass');

    nameCity = document.getElementById("city").value;
    nameDistrict = document.getElementById("district").value;
    nameWard = document.getElementById("ward").value;

    if (arrStr === null) {
        if (getEmail === "" && getPass === "") {
            messageEmail.innerHTML = 'Vui lòng nhập email hợp lệ';
            messagePass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự';
            messageUser.innerText = "";
        }
        else if (getPass === "" && getEmail !== "") {
            messagePass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự';
            messageUser.innerText = "";
            if (validEmail(getEmail) === false) {
                messageEmail.innerHTML = 'Định dạng email của bạn không hợp lệ';
            }
        }
        else if (getPass !== "" && getEmail === "") {
            messageUser.innerHTML = 'Vui lòng nhập email hợp lệ';
            messageUser.innerText = "";
        }
        else if (getEmail !== "" && getPass !== "") {
            if (validEmail(getEmail) === false && checkPass(getPass) === true) {
                messageEmail.innerHTML = 'Định dạng email của bạn không hợp lệ, hoặc đã được dùng';
                messagePass.innerHTML = "";
                messageUser.innerText = "";
            }
            else if (validEmail(getEmail) === true && checkPass(getPass) === false) {
                messageEmail.innerHTML = '';
                messagePass.innerHTML = "Mật khẩu của bạn phải chứa từ 8-60 ký tự";
                messageUser.innerText = "";
            }
            else if (validEmail(getEmail) === false && checkPass(getPass) === false) {
                messageEmail.innerHTML = 'Định dạng email của bạn không hợp lệ, hoặc đã được dùng';
                messagePass.innerHTML = "Mật khẩu của bạn phải chứa từ 8-60 ký tự";
                messageUser.innerText = "";
            }
            else {
                if (getUser === "") {
                    messageUser.innerText = "Mời bạn nhập user name";
                }
                else {
                    if (checkConfirmpass(getPass, getConfirmpass) === true) {
                        messageEmail.innerText = '';
                        messagePass.innerText = "";
                        messageUser.innerText = '';
                        messageConfirmpass.innerText = "";
                        // Set value to local storage
                        let arrPassUser = { "name": getUser, "email": getEmail, "pass": getPass, "city": nameCity, "district": nameDistrict, "ward": nameWard };
                        let arrStr = JSON.parse(localStorage.getItem('key'));
                        arrStr.push(arrPassUser);
                        let strPassUser = JSON.stringify(arrStr);
                        localStorage.setItem('key', strPassUser);
                        //------------------------------------------------//
                        // Call notification //
                        const toast = document.querySelector(".toast"),
                            closeIcon = document.querySelector(".close"),
                            progress = document.querySelector(".progress");

                        let timer1, timer2;
                        toast.classList.add("active");
                        progress.classList.add("active");

                        timer1 = setTimeout(() => {
                            toast.classList.remove("active");
                        }, 5000);

                        timer2 = setTimeout(() => {
                            progress.classList.remove("active");
                        }, 5300);

                        // click close notification
                        closeIcon.addEventListener("click", () => {
                            toast.classList.remove("active");

                            setTimeout(() => {
                                progress.classList.remove("active");
                                window.location.assign('index-login.html');
                            }, 300);

                            clearTimeout(timer1);
                            clearTimeout(timer2);
                        });
                        //next page//
                        setTimeout(() => {
                            window.location.assign('index-login.html');
                        }, 5300);
                    }
                    else {
                        messageEmail.innerText = '';
                        messagePass.innerText = "";
                        messageUser.innerText = '';
                        messageConfirmpass.innerText = "Mật khẩu của bạn phải chứa từ 4-60 ký tự, hoặc mật khẩu không khớp";

                    }
                }
            }
        }
    }
    else {
        // console.log("OK");
        if (getEmail === "" && getPass === "") {
            messageEmail.innerHTML = 'Vui lòng nhập email hợp lệ';
            messagePass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự';
            messageUser.innerText = "";
        }
        else if (getPass === "" && getEmail !== "") {
            messagePass.innerHTML = 'Mật khẩu của bạn phải chứa từ 8-60 ký tự';
            messageUser.innerText = "";
            if (checkEmail(getEmail, arrStr) === false) {
                messageEmail.innerHTML = 'Định dạng email của bạn không hợp lệ';
            }
        }
        else if (getPass !== "" && getEmail === "") {
            messageEmail.innerHTML = 'Vui lòng nhập email hợp lệ';
            messageUser.innerText = "";
        }
        else if (getEmail !== "" && getPass !== "") {
            if (checkEmail(getEmail, arrStr) === false && checkPass(getPass) === true) {
                messageEmail.innerHTML = 'Định dạng email của bạn không hợp lệ, hoặc đã được dùng';
                messagePass.innerHTML = "";
                messageUser.innerText = "";
            }
            else if (checkEmail(getEmail, arrStr) === true && checkPass(getPass) === false) {
                messageEmail.innerHTML = '';
                messagePass.innerHTML = "Mật khẩu của bạn phải chứa từ 8-60 ký tự";
                messageUser.innerText = "";
            }
            else if (checkEmail(getEmail, arrStr) === false && checkPass(getPass) === false) {
                messageEmail.innerHTML = 'Định dạng email của bạn không hợp lệ, hoặc đã được dùng';
                messagePass.innerHTML = "Mật khẩu của bạn phải chứa từ 8-60 ký tự";
                messageUser.innerText = "";
            }
            else {
                if (getUser === '') {
                    messageUser.innerText = "Mời bạn nhập user name";
                }
                else {
                    if (checkUsername(getUser, arrStr) === false) {
                        messageUser.innerText = "User name không hợp lệ hoặc đã bị trùng";
                    }
                    else {
                        if (checkConfirmpass(getPass, getConfirmpass) === true) {
                            messageUser.innerText = '';
                            messagePass.innerText = "";
                            messageConfirmpass.innerText = '';
                            messageUser.innerText = '';
                            let arrPassUser = { "name": getUser, "email": getEmail, "pass": getPass, "city": nameCity, "district": nameDistrict, "ward": nameWard };
                            let arrStr = JSON.parse(localStorage.getItem('key'));
                            arrStr.push(arrPassUser);
                            let strPassUser = JSON.stringify(arrStr);
                            localStorage.setItem('key', strPassUser);

                            const toast = document.querySelector(".toast");
                            const closeIcon = document.querySelector(".close");
                            const progress = document.querySelector(".progress");

                            let timer1, timer2;


                            toast.classList.add("active");
                            progress.classList.add("active");

                            timer1 = setTimeout(() => {
                                toast.classList.remove("active");
                            }, 5000);

                            timer2 = setTimeout(() => {
                                progress.classList.remove("active");
                            }, 5300);

                            closeIcon.addEventListener("click", () => {
                                toast.classList.remove("active");

                                setTimeout(() => {
                                    progress.classList.remove("active");
                                    window.location.assign('index-login.html');
                                }, 300);

                                clearTimeout(timer1);
                                clearTimeout(timer2);
                            });
                            setTimeout(() => {
                                window.location.assign('index-login.html');
                            }, 5300);


                        }
                        else {
                            messageEmail.innerText = '';
                            messagePass.innerText = "";
                            messageUser.innerText = '';
                            messageConfirmpass.innerText = "Mật khẩu của bạn phải chứa từ 8-60 ký tự, hoặc mật khẩu không khớp";
                        }
                    }
                }

            }
        }
    }
}

// get data from API and create option for selection of city
async function selectProvine() {
    // search.value.trim();
    if (localStorage.getItem('province') === null) {
        let apiURL = `https://provinces.open-api.vn/api/?depth=3`;
        data = await fetch(apiURL).then(res => res.json());
        strData = JSON.stringify(data);
        localStorage.setItem('province', strData)
        for (var i = 0; i < data.length; i++) {
            var cityTp = document.createElement("option");
            cityTp.value = data[i].name;
            cityTp.innerHTML = data[i].name;
            document.getElementById("city").appendChild(cityTp);
        }
    }
    else {
        strData = localStorage.getItem('province');
        data = JSON.parse(strData);
        for (var i = 0; i < data.length; i++) {
            var cityTp = document.createElement("option");
            cityTp.value = data[i].name;
            cityTp.innerHTML = data[i].name;
            document.getElementById("city").appendChild(cityTp);
        }

    }
    nameCity = document.getElementById('city').value;

}
selectProvine();
function checkDistrict() {
    // Get index of the city in data
    nameCity = document.getElementById('city').value;
    for (let m = 0; m < data.length; m++) {
        if (nameCity === data[m].name) {
            indexCity = m;
            break;
        }
    }
    // Remove district option of city selection 
    let getDistrict = document.getElementById("district");
    for (let i = 0; i < getDistrict.length; i++) {
        getDistrict.remove(i);
        i = i - 1;
    }
    // Remove ward option of district selection
    let getWard = document.getElementById("ward");
    for (let i = 0; i < getWard.length; i++) {
        getWard.remove(i);
        i = i - 1;
    }
    // create option for district selection
    for (var i = 0; i < data[indexCity].districts.length; i++) {
        var districtQ = document.createElement("option");
        districtQ.value = data[indexCity].districts[i].name;
        districtQ.innerHTML = data[indexCity].districts[i].name;
        document.getElementById("district").appendChild(districtQ);
    }
    // Get index of the district in data
    nameDistrict = document.getElementById("district").value;
    for (let m = 0; m < data[indexCity].districts.length; m++) {
        if (nameDistrict === data[indexCity].districts[m].name) {
            indexDistrict = m;
            break;
        }
    }
    // Remove ward option of district selection
    getWard = document.getElementById("ward");
    for (let i = 0; i < getWard.length; i++) {
        getWard.remove(i);
        i = i - 1;
    }
    // create option for ward selection
    for (var i = 0; i < data[indexCity].districts[indexDistrict].wards.length; i++) {
        var wardP = document.createElement("option");
        wardP.value = data[indexCity].districts[indexDistrict].wards[i].name;
        wardP.innerHTML = data[indexCity].districts[indexDistrict].wards[i].name;
        document.getElementById("ward").appendChild(wardP);
    }
    nameWard = document.getElementById("ward").value;
}

checkDistrict();

// event of change the selection
document.getElementById("district").addEventListener("change", function () {
    nameDistrict = this.value;

    for (let m = 0; m < data[indexCity].districts.length; m++) {
        if (nameDistrict === data[indexCity].districts[m].name) {
            indexDistrict = m;
            break;
        }
    }
    let getWard = document.getElementById("ward");
    for (let i = 0; i < getWard.length; i++) {
        getWard.remove(i);
        i = i - 1;
    }
    for (var i = 0; i < data[indexCity].districts[indexDistrict].wards.length; i++) {
        var wardP = document.createElement("option");
        wardP.value = data[indexCity].districts[indexDistrict].wards[i].name;
        wardP.innerHTML = data[indexCity].districts[indexDistrict].wards[i].name;
        document.getElementById("ward").appendChild(wardP);
    }
    document.getElementById("ward").addEventListener("change", function () {
        nameWard = this.value;
    });
}
);
document.getElementById("city").addEventListener("change", function () {
    nameCity = this.value
    for (let m = 0; m < data.length; m++) {
        if (nameCity === data[m].name) {
            indexCity = m;
            break;
        }
    }
    let getDistrict = document.getElementById("district");
    for (let i = 0; i < getDistrict.length; i++) {
        getDistrict.remove(i);
        i = i - 1;
    }
    let getWard = document.getElementById("ward");
    for (let i = 0; i < getWard.length; i++) {
        getWard.remove(i);
        i = i - 1;
    }
    for (var i = 0; i < data[indexCity].districts.length; i++) {
        var districtQ = document.createElement("option");
        districtQ.value = data[indexCity].districts[i].name;
        districtQ.innerHTML = data[indexCity].districts[i].name;
        document.getElementById("district").appendChild(districtQ);
    }
    getWard = document.getElementById("ward");
    for (let i = 0; i < getWard.length; i++) {
        getWard.remove(i);
        i = i - 1;
    }
    for (var i = 0; i < data[indexCity].districts[indexDistrict].wards.length; i++) {
        var wardP = document.createElement("option");
        wardP.value = data[indexCity].districts[indexDistrict].wards[i].name;
        wardP.innerHTML = data[indexCity].districts[indexDistrict].wards[i].name;
        document.getElementById("ward").appendChild(wardP);
    }

    document.getElementById("district").addEventListener("change", function () {
        nameDistrict = this.value;

        for (let m = 0; m < data[indexCity].districts.length; m++) {
            if (nameDistrict === data[indexCity].districts[m].name) {
                indexDistrict = m;
                break;
            }
        }
        let getWard = document.getElementById("ward");
        for (let i = 0; i < getWard.length; i++) {
            getWard.remove(i);
            i = i - 1;
        }
        for (var i = 0; i < data[indexCity].districts[indexDistrict].wards.length; i++) {
            var wardP = document.createElement("option");
            wardP.value = data[indexCity].districts[indexDistrict].wards[i].name;
            wardP.innerHTML = data[indexCity].districts[indexDistrict].wards[i].name;
            document.getElementById("ward").appendChild(wardP);
        }
        document.getElementById("ward").addEventListener("change", function () {
            nameWard = this.value;
        });
    }
    );
}
)

function showPass() {
    var x = document.querySelector(".singup-input-Pass");


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

function showConfirmpass() {
    var x = document.querySelector(".singup-input-confirmPass");
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


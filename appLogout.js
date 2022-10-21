// Logout
function myFunctionLogout() {
    window.location.assign("index.html");
    localStorage.setItem("boolLogin", "false");
}

let eventLogout = document.getElementById("logout")
eventLogout.addEventListener('click', myFunctionLogout);

let eventLogin = localStorage.getItem("boolLogin");

if (eventLogin == "true") {
    let getInformation = document.getElementById("information");
    let getDisplayUsername = document.getElementById('display-username');
    console.log(getInformation);
    let arrUser = JSON.parse(localStorage.getItem('key'));
    let indexUser = Number(localStorage.getItem('userLogin'));
    let userName = arrUser[indexUser].name;
    let wordFirst = userName[0];
    getInformation.setAttribute("value", wordFirst);
    // getDisplayUsername.innerHTML = userName;
}
function userInfor() {
    window.location.assign("index-inforUser.html");
}
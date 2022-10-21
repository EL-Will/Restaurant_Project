const activePage = window.location.pathname;
console.log(activePage);
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
})

function login() {
    let checkLogin = localStorage.getItem('boolLogin');
    if (checkLogin === "true") {
        sessionStorage.setItem('firstAccess', "false");
        window.location.assign("indexLogoutMenu.html");
    }
    else {
        sessionStorage.setItem('firstAccess', "false");
        window.location.assign("index.html");
    }
}

let checkFistaccess = sessionStorage.getItem('firstAccess');
if (checkFistaccess === null) {
    sessionStorage.setItem('firstAccess', "true");
    login();
}
else {
    let checkFistaccess = sessionStorage.getItem('firstAccess');
    if (checkFistaccess === "true") {
        login();
    }
    else {
    }
}



function checkLogout(){
    let checkLogin = localStorage.getItem('boolLogin');
    if (checkLogin === 'false'){
        window.location.assign('index.html');

    }
}

function statusLogin(){
    let checkLogin = localStorage.getItem('boolLogin');
    if (checkLogin === 'true'){
        window.location.assign('indexLogoutMenu.html');

    }
}

function functionExpandMenu() {
    let idExpandMenu = document.getElementById("expand-menu");
    console.log(idExpandMenu);
}


let checkLogin = localStorage.getItem('boolLogin');
if(checkLogin == 'true'){
    let indexLogin = Number(localStorage.getItem("userLogin"));
    let arrUser = JSON.parse(localStorage.getItem('key'));
    let arrOrder = JSON.parse(localStorage.getItem('inforOrder'));

    let userName = document.getElementById('name');
    let userAdd = document.getElementById('add');
    let userDate = document.getElementById('date');
    let userTime = document.getElementById('time');
    let userCount = document.getElementById('count');

    userName.innerHTML = arrUser[indexLogin].name;
    userAdd.innerHTML = arrUser[indexLogin].ward + ' - ' + arrUser[indexLogin].district + ' - ' + arrUser[indexLogin].city;
    if(arrUser[indexLogin].name == arrOrder[0].name){
        userDate.innerHTML = arrOrder[0].date;
        userTime.innerHTML = arrOrder[0].time;
        userCount.innerHTML = arrOrder[0].count;
    }

}
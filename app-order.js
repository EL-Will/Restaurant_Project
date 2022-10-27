// let eventBookNow = document.getElementById("booknow");
// eventBookNow.addEventListener('click', bookNow());

var toDay = new Date(), y = toDay.getFullYear(), m = toDay.getMonth();
var firstDay = new Date(y, m, 1);
var lastDay = new Date(y, m + 1, 0);

// console.log(toDay.getHours());
// console.log(firstDay);
// console.log(lastDay);

let date, time, strTime, countPeople;
document.getElementById("datetime").addEventListener("change", function () {
    date = this.value;
    var dateEntered = new Date(this.value);
    // console.log(input); //e.g. 2015-11-13
});

document.getElementById("time").addEventListener("change", function () {
    time = this.value;
    // console.log(input); //e.g. 2015-11-13
});
document.getElementById("countpeople").addEventListener("change", function () {
    countPeople = this.value;
    // console.log(input); //e.g. 2015-11-13
});

function checkDate(date, toDay, lastDay) {
    console.log(date.getDate());
    console.log(toDay.getDate());
    console.log(lastDay.getDate());
    if (date.getDate() >= toDay.getDate() && date.getDate() <= lastDay.getDate()) {
        return true;
    }
    else {
        return false;
    }
}
function checkTime(strTime, date, toDay) {
    
    if(date.getDate() === toDay.getDate()){
        if(date.getHours()<=21){
            switch (strTime) {
                case "11": if(date.getHours()<= 11 && date.getMinutes() === 0){time = '11:00 PM'; break;} 
                            else{return false;}
                case "111": if(date.getHours()<=11 && date.getMinutes() <= 15){time = '11:15 PM'; break;} 
                            else{return false;}
                case "112": if(date.getHours()<=11 && date.getMinutes() <= 30){time = '11:30 PM'; break;} 
                            else{return false;}
                case "113": if(date.getHours()<=11 && date.getMinutes() <= 45){time = '11:45 PM'; break;} 
                            else{return false;}
                
                case "12": if(date.getHours()<=12 && date.getMinutes() === 0){time = '12:00 PM'; break;} 
                            else{return false;}
                case "121": if(date.getHours()<=12 && date.getMinutes() <= 15){time = '12:15 PM'; break;} 
                            else{return false;}
                case "122": if(date.getHours()<=12 && date.getMinutes() <= 30){time = '12:30 PM'; break;} 
                            else{return false;}
                case "123": if(date.getHours()<=12 && date.getMinutes() <= 45){time = '12:45 PM'; break;} 
                            else{return false;}

                case "13": if(date.getHours()<=13 && date.getMinutes() === 0){time = '13:00 PM'; break;} 
                            else{return false;}
                case "131": if(date.getHours()<=13 && date.getMinutes() <= 15){time = '13:15 PM'; break;} 
                            else{return false;}
                case "132": if(date.getHours()<=13 && date.getMinutes() <= 30){time = '13:30 PM'; break;} 
                            else{return false;}
                case "133": if(date.getHours()<=13 && date.getMinutes() <= 45){time = '13:45 PM'; break;} 
                            else{return false;}

                case "14": if(date.getHours()<=14 && date.getMinutes() === 0){time = '14:00 PM'; break;} 
                            else{return false;}
                case "141": if(date.getHours()<=14 && date.getMinutes() <= 15){time = '14:15 PM'; break;} 
                            else{return false;}
                case "142": if(date.getHours()<=14 && date.getMinutes() <= 30){time = '14:30 PM'; break;} 
                            else{return false;}
                case "143": if(date.getHours()<=14 && date.getMinutes() <= 45){time = '14:45 PM'; break;} 
                            else{return false;}
        
                case "15": if(date.getHours()<=15 && date.getMinutes() === 0){time = '15:00 PM'; break;} 
                            else{return false;}
                case "151": if(date.getHours()<=15 && date.getMinutes() <= 15){time = '15:15 PM'; break;} 
                            else{return false;}
                case "152": if(date.getHours()<=15 && date.getMinutes() <= 30){time = '15:30 PM'; break;} 
                            else{return false;}
                case "153": if(date.getHours()<=15 && date.getMinutes() <= 45){time = '15:45 PM'; break;} 
                            else{return false;}
        
                case "16": if(date.getHours()<=16 && date.getMinutes() === 0){time = '16:00 PM'; break;} 
                            else{return false;}
                case "161": if(date.getHours()<=16 && date.getMinutes() <= 15){time = '16:15 PM'; break;} 
                            else{return false;}
                case "162": if(date.getHours()<=16 && date.getMinutes() <= 30){time = '16:30 PM'; break;} 
                            else{return false;}
                case "163": if(date.getHours()<=16 && date.getMinutes() <= 45){time = '16:45 PM'; break;} 
                            else{return false;}
        
                case "17": if(date.getHours()<=17 && date.getMinutes() === 0){time = '17:00 PM'; break;} 
                            else{return false;}
                case "171": if(date.getHours()<=17 && date.getMinutes() <= 15){time = '17:15 PM'; break;} 
                            else{return false;}
                case "172": if(date.getHours()<=17 && date.getMinutes() <= 30){time = '17:30 PM'; break;} 
                            else{return false;}
                case "173": if(date.getHours()<=17 && date.getMinutes() <= 45){time = '17:45 PM'; break;} 
                            else{return false;}
        
                case "18": if(date.getHours()<=18 && date.getMinutes() === 0){time = '18:00 PM'; break;} 
                            else{return false;}
                case "181": if(date.getHours()<=18 && date.getMinutes() <= 15){time = '18:15 PM'; break;} 
                            else{return false;}
                case "182": if(date.getHours()<=18 && date.getMinutes() <= 30){time = '18:30 PM'; break;} 
                            else{return false;}
                case "183": if(date.getHours()<=18 && date.getMinutes() <= 45){time = '18:45 PM'; break;} 
                            else{return false;}
        
                case "19": if(date.getHours()<=19 && date.getMinutes() === 0){time = '19:00 PM'; break;} 
                            else{return false;}
                case "191": if(date.getHours()<=19 && date.getMinutes() <= 15){time = '19:15 PM'; break;} 
                            else{return false;}
                case "192": if(date.getHours()<=19 && date.getMinutes() <= 30){time = '19:30 PM'; break;} 
                            else{return false;}
                case "193": if(date.getHours()<=19 && date.getMinutes() <= 45){time = '19:45 PM'; break;} 
                            else{return false;}
        
                case "20": if(date.getHours()<=20 && date.getMinutes() === 0){time = '20:00 PM'; break;} 
                            else{return false;}
                case "201": if(date.getHours()<=20 && date.getMinutes() <= 15){time = '20:15 PM'; break;} 
                            else{return false;}
                case "202": if(date.getHours()<=20 && date.getMinutes() <= 30){time = '20:30 PM'; break;} 
                            else{return false;}
                case "203": if(date.getHours()<=20 && date.getMinutes() <= 45){time = '20:45 PM'; break;} 
                            else{return false;}
        
                case "21": if(date.getHours()<=21 && date.getMinutes() === 0){time = '21:00 PM'; break;} 
                           else{return false;}
                default: break;
            }
            return true;
        }
        else{
            return false;
        }
    }
    else{
        switch (strTime) {
            case "11": time = '11:00 AM'; break;
            case "111": time = '11:15 AM'; break;
            case "112": time = '11:30 AM'; break;
            case "113": time = '11:45 AM'; break;
    
            case "12": time = '12:00 PM'; break;
            case "121": time = '12:15 PM'; break;
            case "122": time = '12:30 PM'; break;
            case "123": time = '12:45 PM'; break;
    
            case "13": time = '13:00 PM'; break;
            case "131": time = '13:15 PM'; break;
            case "132": time = '13:30 PM'; break;
            case "133": time = '13:45 PM'; break;
    
            case "14": time = '14:00 PM'; break;
            case "141": time = '14:15 PM'; break;
            case "142": time = '14:30 PM'; break;
            case "143": time = '14:45 PM'; break;
    
            case "15": time = '15:00 PM'; break;
            case "151": time = '15:15 PM'; break;
            case "152": time = '15:30 PM'; break;
            case "153": time = '15:45 PM'; break;
    
            case "16": time = '16:00 PM'; break;
            case "161": time = '16:15 PM'; break;
            case "162": time = '16:30 PM'; break;
            case "163": time = '16:45 PM'; break;
    
            case "17": time = '17:00 PM'; break;
            case "171": time = '17:15 PM'; break;
            case "172": time = '17:30 PM'; break;
            case "173": time = '17:45 PM'; break;
    
            case "18": time = '18:00 PM'; break;
            case "181": time = '18:15 PM'; break;
            case "182": time = '18:30 PM'; break;
            case "183": time = '18:45 PM'; break;
    
            case "19": time = '19:00 PM'; break;
            case "191": time = '19:15 PM'; break;
            case "192": time = '19:30 PM'; break;
            case "193": time = '19:45 PM'; break;
    
            case "20": time = '20:00 PM'; break;
            case "201": time = '20:15 PM'; break;
            case "202": time = '20:30 PM'; break;
            case "203": time = '20:45 PM'; break;
    
            case "21": time = '21:00 PM'; break;
            default: break;
        }
        return true;
    }
}
function bookNow() {
    let checkLogin = localStorage.getItem('boolLogin');
    if (checkLogin === "true") {
        date = new Date(document.getElementById("datetime").value);
        strTime = document.getElementById("time").value;
        if (checkDate(date, toDay, lastDay) === true && checkTime(strTime,date,toDay) === true) {
            let idTextResult1 = document.getElementById('text-result1');
            let idTextResult2 = document.getElementById('text-result2');
            idTextResult1.innerText = 'Thành công';
            idTextResult2.innerText = "Bạn đã đặt bàn thành công";
            // strTime = document.getElementById("time").value;
            // checkTime(strTime);
            countPeople = document.getElementById("countpeople").value;
            date = (document.getElementById("datetime").value);
            let indexUsername = Number(localStorage.getItem('userLogin'));
            let strArr = JSON.parse(localStorage.getItem('key'));
            let nameEmail = strArr[indexUsername].name;
            let getOrder = [{ "name": nameEmail, "date": date, "time": time, "count": countPeople }];
            // let arr = JSON.parse(localStorage.getItem("inforOrder"));
            // if (arr === null) {
            //     let newArr = [];
            //     let strNewarr = JSON.stringify(newArr);
            //     localStorage.setItem('inforOrder', strNewarr);
            //     arr = JSON.parse(localStorage.getItem("inforOrder"));
            // }
            // arr.push(getOrder);
            let strOrder = JSON.stringify(getOrder);
            localStorage.setItem('inforOrder', strOrder);
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


            closeIcon.addEventListener("click", () => {
                toast.classList.remove("active");

                setTimeout(() => {
                    progress.classList.remove("active");
                }, 300);

                clearTimeout(timer1);
                clearTimeout(timer2);
            });
        }
        else {
            let idTextResult1 = document.getElementById('text-result1');
            let idTextResult2 = document.getElementById('text-result2');
            idTextResult1.innerText = 'Thất bại';
            idTextResult2.innerText = "Ngày hoặc giờ không hợp lệ";
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


            closeIcon.addEventListener("click", () => {
                toast.classList.remove("active");

                setTimeout(() => {
                    progress.classList.remove("active");
                }, 300);

                clearTimeout(timer1);
                clearTimeout(timer2);
            });

        }
    }
    else {
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


        closeIcon.addEventListener("click", () => {
            toast.classList.remove("active");

            setTimeout(() => {
                progress.classList.remove("active");
            }, 300);
            window.location.assign("index-login.html");
            clearTimeout(timer1);
            clearTimeout(timer2);
        });
        setTimeout(() => {
            window.location.assign("index-login.html");
        }, 5300);

    }
}
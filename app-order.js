// let eventBookNow = document.getElementById("booknow");
// eventBookNow.addEventListener('click', bookNow());

let date, time, countPeople;
document.getElementById("datetime").addEventListener("change", function () {
    date = this.value;
    // var dateEntered = new Date(input);
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

function bookNow() {
    let checkLogin = localStorage.getItem('boolLogin');

    console.log(checkLogin);
    if (checkLogin === "true") {
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
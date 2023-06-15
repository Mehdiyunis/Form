var month;
var fesil;

document.getElementById("submit").onclick = function () {

    var month = document.getElementById("username").value;

    if (month == 0) {
        var fesil = "0-dan böyük, 13-dən kiçik ədəd daxil edin"
    }

    else if (month <= 3) { /* 0 < month <= 3 */
        var fesil = "Qış Ayıdır"
    }

    else if (month <= 6) {
        var fesil = "Yaz Ayıdır"
    }

    else if (month <= 9) {
        var fesil = "Yay Ayıdır"
    }

    else if (month <= 12) {
        var fesil = "Payız Ayıdır"
    }

    else {
        var fesil = "Mennen Mezelenirsen???!!!"
    }


    document.getElementById("h2").innerText = fesil;

}




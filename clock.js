const daysEnum = {0: "Pazar", 1: "Pazartesi", 2: "Salı", 3: "Çarşamba", 4: "Perşembe", 5: "Cuma", 6: "Cumartesi"};
Object.freeze(daysEnum);

function askName(){
    var name = prompt("Adınız nedir?");
    document.getElementById("myName").innerText = name;
}

function showTime() {
    var el = document.getElementById("myClock");
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    var text = hour + ":" + min + ":" + sec + " " + daysEnum[date.getDay()];
    el.innerText = text;
    el.textContent = text;

    setTimeout(showTime, 1000);
}
askName();
showTime();
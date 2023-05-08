let image = ["result/LKG.png", "result/UKG.png", "result/First.png", "result/Second.png", "result/Third.jpg", "result/Fourth.jpg", "result/Fifth.jpg", "result/Seventh.jpg", "result/Eigth.jpg", "result/Ninth.jpg", "result/Tenth.jpg", "result/Eleventh.jpg", "result/Twelveth.jpg", "result/FirstSem.jpg"];
let shet = ["spreadsheet/LKGs.png","spreadsheet/UKGs.png","spreadsheet/firsts.png","spreadsheet/Seconds.png","spreadsheet/thirds.png","spreadsheet/fourths.png","spreadsheet/fifths.png","spreadsheet/sevens.png","spreadsheet/eights.png","spreadsheet/nineths.png","spreadsheet/tenths.png","spreadsheet/elevenths.png","spreadsheet/twelveths.png","spreadsheet/FirstSems.png"]
let len = ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%",];
let inner = ["L.K.G", "U.K.G", "1st", "2nd", "3rd", "4th", "5th", "7th", "8th", "9th", "10th", "11th", "12th", "First Semester"]

let x = document.getElementById("zoom");
function fullscreen() {
    x.hidden = false;
};
function norm() {
    x.hidden = true;
};

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
function primary() {
    p1.hidden = true;
    p2.hidden = false;
}
function secondary() {
    p1.hidden = true;
    p3.hidden = false;
}
function graduation() {
    p1.hidden = true;
    p4.hidden = false;
}

function edu(q) {
    p1.hidden = false;
    if (q == 1) {
        p2.hidden = true;
    }
    else if (q == 2) {
        p3.hidden = true;
    }
    else {
        p4.hidden = true;
    }
}

let temp;
let i = document.getElementById("image");
let r = document.getElementById("result");
let s = document.getElementById("inner");
function img(index) {
    temp = index;
    r.src = image[index];
    i.src = image[index];
    i.style.width = len[index];
    s.innerHTML = inner[index];
    console.log();
    p5.hidden = false;
    if (index <= 10) {
        p2.hidden = true;
    }
    else if (index > 10 && index <= 12) {
        p3.hidden = true;
    }
    else {
        p4.hidden = true;
    }
}

function back() {
    p5.hidden = true;
    if (temp <= 10) {
        p2.hidden = false;
    }
    else if (temp > 10 && temp <= 12) {
        p3.hidden = false;
    }
    else {
        p4.hidden = false;
    }
}

let cho = 0;
let sp = document.getElementById("spsheet");
function sheet() {
    cho++;
    if (cho % 2 == 1) {
        r.src = shet[temp];
        i.src = shet[temp];
        i.style.width = "90%";
        sp.innerHTML = "Normal View";
    }
    else{
        r.src = image[temp];
        i.src = image[temp];
        i.style.width = len[temp];
        sp.innerHTML = "SpreadSheet View";
    }
}

let ch = 0;
let pri = document.getElementById("prim");
let sed = document.getElementById("secd");
let gra = document.getElementById("grad");
setInterval(() => {
    ch++;
    if (ch % 2 == 1) {
        s.innerHTML = "<= BACK";
        pri.innerHTML = "<= BACK";
        sed.innerHTML = "<= BACK";
        gra.innerHTML = "<= BACK";

        s.classList.remove("black");
        pri.classList.remove("black");
        sed.classList.remove("black");
        gra.classList.remove("black");

        s.classList.add("orange");
        pri.classList.add("orange");
        sed.classList.add("orange");
        gra.classList.add("orange");
        
    }
    else{
        s.innerHTML = inner[temp];
        pri.innerHTML = "Primary Education";
        sed.innerHTML = "Secondary Education";
        gra.innerHTML = "Graduation";

        s.classList.add("black");
        pri.classList.add("black");
        sed.classList.add("black");
        gra.classList.add("black");
    
        s.classList.remove("orange");
        pri.classList.remove("orange");
        sed.classList.remove("orange");
        gra.classList.remove("orange");
    }
}, 3000);
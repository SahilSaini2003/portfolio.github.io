let a = document.getElementById('back');
let array = [1, 0];
setInterval(() => {
    let index = Math.floor(Math.random() * 2)
    a.insertAdjacentText("afterbegin", array[index]);
    a.insertAdjacentText("afterbegin", "    ");
}, 5)
setInterval(() => {
    a.insertAdjacentText("afterbegin", '\xa0\xa0\xa0');
}, 25)

let page = ["Page 1.", "Page 2.", "Page 3.", "Page 4.", "Page 5.", "Page 6."];
let topic = ["Python & SQL", "Python", "Java", "JavaScript", "C++ / OOPS", "C / DSA"];
let link = ["https://github.com/SahilSaini2003/Python_project_12", "https://github.com/SahilSaini2003/Python-Codes", "https://github.com/SahilSaini2003/Java-Begineer", "https://github.com/SahilSaini2003/JavaScript-Begineer", "https://github.com/SahilSaini2003/OOPS", "https://github.com/SahilSaini2003/D.S.A-College"];
let des = ["This Repositary Consist of My Python Project Topic 'Online Transection'. I Created it as my 12th Standard Project. This Marks my Entrance in the world of Programming.", "This Repository consist of codes that I had coded while I was learning Python.", "This Repository consist of codes that I had coded while I was learning JAVA.", "This Repository consist of codes that I had coded while I was learning JavaScript.", "This Repository consist of codes that I had coded while I was learning Object Oriented Programming in my 3rd Semester.", "This Repository consist of codes that I had coded while I was learning Data Structures and Algorithm in my 3rd Semester."];

let choice = 0;
let pge = document.getElementById("pg");
let lang = document.getElementById("lang");
let glink = document.getElementById("glink");
let dec = document.getElementById("des");


let arrR = document.getElementById("arrR");
let arrL = document.getElementById("arrL");


function fill(cho) {
    let sizeArr = page.length;
    if (cho == 0) {
        arrL.hidden = true;
    } 
    else {
        arrL.hidden = false;
    }
    if (cho == sizeArr-1) {
        arrR.hidden = true;
    }
    else {
        arrR.hidden = false;
    }
    pge.innerHTML = page[cho];
    lang.innerHTML = topic[cho];
    dec.innerHTML = des[cho];
    glink.href = link[cho];
}

fill(choice);

function right() {
    choice++;
    fill(choice);
}

function left() {
    choice--;
    fill(choice);
}
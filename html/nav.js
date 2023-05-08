function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

let loader = document.getElementById('loader');
let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');

setTimeout(() => {
    loader.style.left = "0";
}, 2000);
setTimeout(() => {
    loader.style.left = "-100%";
    page1.style.display = "none";
    page2.style.display = "block";
}, 3000);
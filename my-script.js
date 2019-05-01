var myHeading = document.querySelector("h1");
myHeading.onclick = function() {
    alert("Hello world!");
}

var myImg = document.querySelector("img");
myImg.onclick = function() {
    var mySrc = myImg.getAttribute("src");
    if (mySrc === "cloud.png") {
        myImg.setAttribute("src", "grass.jpeg");
    } else {
        myImg.setAttribute("src", "cloud.png");
    }
}

var myButton = document.querySelector("button");
function setUserName () {
    var myName = prompt("Как ваше имя?");
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "Добро пожаловать на наш сайт " + myName;
}
if (!localStorage.getItem('name')) {
    setUserName(); // ф-я спрашив. имя польз-ля и сохран. его в хранилище брауз., т.ж. меняет заголовок (1-й раз)
} else {
    // сразу достаёт имя из хранилища и меняет его (остальные разы)
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = "Добро пожаловать на наш сайт " + storedName;
}
myButton.onclick = function() {
    setUserName();
}
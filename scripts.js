let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
let btnp1 = document.getElementById("plusbutton1");
let btnp2 = document.getElementById("plusbutton2");
let btnp3 = document.getElementById("plusbutton3");
let btmin1 = document.getElementById("minusbutton1");
let btmin2 = document.getElementById("minusbutton2");
let btmin3 = document.getElementById("minusbutton3");
let price = document.getElementsByClassName("price");

let total = document.getElementById("total");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let delete1 = document.getElementById("item1_remove");
let delete2 = document.getElementById("item2_remove");
let delete3 = document.getElementById("item3_remove");
let allitems = document.getElementById("everything");
let items = document.getElementsByClassName("item");

let never = document.getElementsByClassName("remove");
let heart = document.getElementsByClassName("fa fa-heart");

let allprices = [];
let allpriceschanges = [];
let test = false;
let sum = 0;
let sum2 = 0;
let reg = 0;
let reg2 = 0;

// function change() {
//     for (let i = 0; i < heart.length; i++) {
//         never[i].addEventListener("click", function () {});
//     }
// }

btnp1.addEventListener("click", function () {
    value1.innerHTML = Number(value1.innerHTML) + 1;
    allprices[0] = Number(price[0].innerHTML) * Number(value1.innerHTML);
    sum = 0;
    for (var j in allprices) {
        sum += allprices[j];
    }
    var n = sum.toString();
    total.innerHTML = n;
});
btnp2.addEventListener("click", function () {
    value2.innerHTML = Number(value2.innerHTML) + 1;
    allprices[1] = Number(price[1].innerHTML) * Number(value2.innerHTML);
    sum = 0;
    for (var j in allprices) {
        sum += allprices[j];
    }
    var n = sum.toString();
    total.innerHTML = n;
});
btnp3.addEventListener("click", function () {
    value3.innerHTML = Number(value3.innerHTML) + 1;
    allprices[2] = Number(price[2].innerHTML) * Number(value3.innerHTML);
    sum = 0;
    for (var j in allprices) {
        sum += allprices[j];
    }
    var n = sum.toString();
    total.innerHTML = n;
});
btmin1.addEventListener("click", function () {
    if (Number(value1.innerHTML > 0)) {
        value1.innerHTML = Number(value1.innerHTML) - 1;
    }
    allprices[0] = Number(price[0].innerHTML) * Number(value1.innerHTML);
    sum = 0;
    for (var j in allprices) {
        sum += allprices[j];
    }
    var n = sum.toString();
    total.innerHTML = n;
});

btmin2.addEventListener("click", function () {
    if (Number(value2.innerHTML > 0)) {
        value2.innerHTML = Number(value2.innerHTML) - 1;
    }
    allprices[1] = Number(price[1].innerHTML) * Number(value2.innerHTML);
    sum = 0;
    for (var j in allprices) {
        sum += allprices[j];
    }
    var n = sum.toString();
    total.innerHTML = n;
});
btmin3.addEventListener("click", function () {
    if (Number(value3.innerHTML > 0)) {
        value3.innerHTML = Number(value3.innerHTML) - 1;
    }
    allprices[2] = Number(price[2].innerHTML) * Number(value3.innerHTML);
    sum = 0;
    for (var j in allprices) {
        sum += allprices[j];
    }
    var n = sum.toString();
    total.innerHTML = n;
});
delete1.addEventListener("click", function () {
    total.innerHTML =
        Number(total.innerHTML) -
        Number(value1.innerHTML) * Number(price[0].innerHTML);
    allitems.removeChild(item1);
});
delete2.addEventListener("click", function () {
    total.innerHTML =
        Number(total.innerHTML) -
        Number(value2.innerHTML) * Number(price[1].innerHTML);
    allitems.removeChild(item2);
});
delete3.addEventListener("click", function () {
    total.innerHTML =
        Number(total.innerHTML) -
        Number(value3.innerHTML) * Number(price[2].innerHTML);
    allitems.removeChild(item3);
});

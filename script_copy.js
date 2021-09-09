var value = document.getElementsByClassName("value");
var btnp = document.getElementsByClassName("plusbutton");
var btmin = document.getElementsByClassName("minusbutton");
var price = document.getElementsByClassName("price");
var total = document.getElementById("total");
var allitems = document.getElementById("everything");
var items = document.getElementsByClassName("item");
var never = document.getElementsByClassName("remove");
var allprices = [];
var allpriceschanges = [];
allpriceschanges = items;

let k = 0;
var sum = 0;
var sum2 = 0;
var long = allpriceschanges.length;

function takedown() {
    let x = 0;

    for (let i = 0; i < items.length; i++) {
        never[i].addEventListener("click", function () {
            sum2 = Number(price[i].innerHTML) * Number(value[i].innerHTML);
            x = Number(total.innerHTML);
            if (x > 0) {
                x = Number(total.innerHTML) - sum2;
                var n = x.toString();
                total.innerHTML = n;
            }
            items[i].remove();
            allpriceschanges[long - 1] = allpriceschanges[i];
            console.log(allpriceschanges);
            const index = allprices.indexOf(sum2);
            if (index > -1) {
                allprices.splice(index, 1);
            }
        });
    }
}

function adjust(arr1, arr2, arr3, arr4, arr5) {
    for (let i = 0; i < items.length; i++) {
        arr1[i].addEventListener("click", function () {
            arr2[i].innerHTML = Number(arr2[i].innerHTML) + 1;
            arr4[i] = Number(arr5[i].innerHTML) * Number(arr2[i].innerHTML);
            sum = 0;
            for (var j in arr4) {
                sum += arr4[j];
            }
            var n = sum.toString();
            total.innerHTML = n;
        });

        arr3[i].addEventListener("click", function () {
            if (Number(arr2[i].innerHTML) == 0) {
                arr2[i].innerHTML = 0;
            } else {
                arr2[i].innerHTML = Number(arr2[i].innerHTML) - 1;
                arr4[i] -= Number(arr5[i].innerHTML);
                sum = 0;
                for (var j in arr4) {
                    sum += arr4[j];
                }
            }
            var n = sum.toString();
            return (total.innerHTML = n);
        });
    }
}

adjust(btnp, value, btmin, allprices, price);

takedown();

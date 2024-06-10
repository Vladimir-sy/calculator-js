//Wrap code in an IIFE
(function () {
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-equal");

    //retrieve data from numbers that are clicked
    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    equal.addEventListener("click", function (e) {
        if (screen.value === "") {
            screen.value = "Please Enter a Value";
        } else {
            confirm("Вы действительно хотите посчитать результат!");
            let answer = eval(screen.value);
            screen.value = answer;
        }
        // equal.onclick = new Audio("music/tatar_dreamed_of.mp3").play();
    });

    clear.addEventListener("click", function (e) {
        screen.value = "";
    });
})(); //end IIFE

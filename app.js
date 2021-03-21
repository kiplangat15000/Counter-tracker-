// start from
var count = 0;

// select value and button
// picks only the first selector if you have 2 or more classes 
var value = document.querySelector("#value");
var btns = document.querySelectorAll(".btn");
console.log(btns);
btns.forEach(

    function (btn) {
        btn.addEventListener("click", function (e) {
            var style = (e.currentTarget.classList);
            // if else if and else && contains means to hold something
            if (style.contains("decrease")) {
                count--;
            } // }else if must be outside the current curly braces
            else if (style.contains("increase")) {
                count++;
            } else {
                count = 0;
            }

            // to change color on count
            if (count > 0) {
                value.style.color = "blue"
            }
            else if (count < 0) {
                value.style.color = "red"
            }
            else {
                value.style.color = "violet"
            }
            value.textContent = count;
        })
    })
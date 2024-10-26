let Upper = document.getElementById("Upper");
let Lower = document.getElementById("Lower");
let Numberr = document.getElementById("Number");
let Symbol = document.getElementById("Symbol");

function clicked(x) {
    if (x.className == "unchecked") {
        x.className = "checked";
    } else {
        x.className = "unchecked";
    }
    console.log("Clicked " + x);
}

Upper.addEventListener("click", () => clicked(Upper));
Lower.addEventListener("click", () => clicked(Lower));
Numberr.addEventListener("click", () => clicked(Numberr));
Symbol.addEventListener("click", () => clicked(Symbol));

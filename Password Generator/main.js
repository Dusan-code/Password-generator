let Upper = document.getElementById("Upper");
let Lower = document.getElementById("Lower");
let Numberr = document.getElementById("Number");
let Symbol = document.getElementById("Symbol");

let PassDisplay = document.getElementsByClassName("password");
let Button = document.querySelector("button");

let UpperState = false;
let LowerState = false;
let NumberrState = false;
let SymbolState = false;

let Uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Lowers = "abcdefghijklmnopqestuvwxyz";
let Numberrs = "0123456789";
let Symbols = "!$%_?-";

let PassLength = 10;
let Options = 0;
let Password = "";

let x = null;
let y = null;

Button.addEventListener("click", () => {
    
    Password = "";
    Options = -1;

    if (UpperState) Options = 0;
    if (LowerState) Options += 1;
    if (NumberrState) Options += 1;
    if (SymbolState) Options += 1;

    if (Options != -1) {

        for (let i = 0; i < PassLength; i++) {

            let choise = Math.floor(Math.random() * Options);
            if (choise == 0) Password += Uppers.charAt(Math.floor(Math.random() * 26));
            if (choise == 1) Password += Lowers.charAt(Math.floor(Math.random() * 26));
            if (choise == 2) Password += Numberrs.charAt(Math.floor(Math.random() * 10));
            if (choise == 3) Password += Symbols.charAt(Math.floor(Math.random() * 5));

        }
    } else {
        Password = "Invalid Choise!";
    }
    PassDisplay.innerHTML = Password;
    console.log(Password, UpperState, LowerState, NumberrState, SymbolState);
})

Upper.addEventListener("click", () => clicked(Upper, UpperState));
Lower.addEventListener("click", () => LowerState = clicked(Lower, LowerState));
Numberr.addEventListener("click", () => NumberrState = clicked(Numberr, NumberrState));
Symbol.addEventListener("click", () => SymbolState = clicked(Symbol, SymbolState));

function clicked(x, y) {

    if (x.className == "unchecked") {
        x.className = "checked";
        y = true;
        console.log(y);
        return y;
    } else {
        x.className = "unchecked";
        y = false;
        console.log(y);
        return y;
    }
}

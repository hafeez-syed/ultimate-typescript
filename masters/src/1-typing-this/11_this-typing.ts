/**
 * Created by Hafeez Syed on 15/4/18.
 */
function aThisKeywordPrimer() {
    console.log("... 1: A 'this' Keyword Primer ...");
    const pizza = {
        name: "Blazing Inforno.",
        getName: function () {
            console.log(this);
        },
        sTimeout: function () {
            setTimeout(function () {
                console.log("--- ES5 way ---");
                console.log(this);
            }, 100);
        },
        tTimeout: function () {
            setTimeout(() => {
                console.log("--- ES6 way ---");
                console.log(this);
            }, 100);
        }
    };
    pizza.getName();
}

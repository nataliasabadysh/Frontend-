"use strict";

function fn() {
    // argum - доступен только в нутри переменной
    arguments.length;

    for(let i =0; i< arguments.length; i++) {
        console.log(arguments[i]);
    }
}
fn( 23, 54, 23 );
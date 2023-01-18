// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();
// function x(){
//     var a = 7;
//     return function y(){
//         console.log("Hello " + a);
//     }
//     // return y;
// }
// var z = x();
// // console.log(z);
// z();

// function x(){
//     var a = 7; // this will be stored as refrence data
//     function y(){
//         console.log(a);
//     }
//     a = 100;// and then the refrence variable  updates it with 100
//     return y;
// }
// var z = x()
// z();

const add = (function(){
    let counter = 0;
    return function(){
        counter += 1;
        return counter;
    }
})();

function show(){
    document.getElementById("demo").innerHTML = add();
}
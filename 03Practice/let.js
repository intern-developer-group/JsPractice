{ // enter new scope, TDZ starts
    let log = function () {
        console.log(message); // messagedeclared later
    };

    // This is the TDZ and accessing log
    // would cause a ReferenceError
    let message= 'Hello'; // TDZ ends
    log(); // called outside TDZ
}

for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 200);
    })(i);
}

let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20:  reference x inside the block
}
console.log(x); // 10: reference at the begining of the script


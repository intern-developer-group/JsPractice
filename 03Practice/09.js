var func = function (x, y) { return x + y };
function dump() {
    x = 10;
    y = 20;
    f1 = func(10,20)
    comb = x + y + f1;
    console.log(comb);
}
dump();

function fr(num) {
    if (num <= 0) {
        return 1;
    } else {
        return num * (num - 1);
    }
}
console.log(fr(0));
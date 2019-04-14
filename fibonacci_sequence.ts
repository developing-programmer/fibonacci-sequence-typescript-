var patlen = 20;
var x =1;
var y =1 ;
var z = 1;

console.log(x)
console.log(y)
for (patlen; patlen > 0; patlen--) {
    z = x + y
    x = y
    y = z
    console.log(y)
    }


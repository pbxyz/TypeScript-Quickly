//jlgvale
var o = "hello world!";
var q = Math.floor(Math.random() * 10);
console.log(q + 1);
console.log("hello world!");
for (var i = 0; i < q; i++) {
    console.log((o = "hello, " + o));
}

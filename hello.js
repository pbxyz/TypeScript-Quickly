var x = "hello world!";
var y = Math.floor(Math.random() * 10);
console.log(x + " " + (y + 1));
for (var i = 0; i < y; i++) {
    console.log((x = "hello ," + x));
}

let x: string = "hello world!";
let y: number = Math.floor(Math.random() * 10);
console.log(x + " " + (y + 1));
for (let i = 0; i < y; i++) {
    console.log((x = "hello ," + x));
}

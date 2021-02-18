//jlgvale

let o: string = "hello world!";
let q: number = Math.floor(Math.random() * 10);
console.log(q + 1);
console.log("hello world!");
for (let i = 0; i < q; i++) {
    console.log((o = "hello, " + o));
}

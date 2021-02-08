function calcTax(
    state: string,
    income: number,
    dependents: number
): number | undefined {
    if (state === "NY") {
        return income * 0.06 - dependents * 500;
    } else if (state === "NJ") {
        return income * 0.05 - dependents * 300;
    }
}

let tax = calcTax("NJ", 50000, 2);
// let tax = calcTax("SJ", 50000, 2);
// let tax = calcTax("NJ", 50000, "two");
console.log(tax);

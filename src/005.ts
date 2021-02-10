interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

const p: Person = {
    firstName: "John",
    lastName: "Smith",
    age: 25,
};

function savePerson(person: Person): void {
    console.log("Saving ", person);
}

savePerson(p);

// // class Person {
// //     firstName: string;
// //     lastName: string;
// //     age: number;
// // }

// // const p = new Person();
// // p.firstName = "Jhon";
// // p.lastName = "Smith";
// // p.age = 25;

// // console.log(p);

// class Block {
//     readonly nonce: number;
//     readonly hash: string;
//     constructor(
//         readonly index: number,
//         readonly previousHash: string,
//         readonly timestamp: number,
//         readonly data: string
//     ) {
//         const { nonce, hash } = this.mine();
//         this.nonce = nonce;
//         this.hash = hash;
//     }
//     // The rest of the code is omitted for brevity
// }

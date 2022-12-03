import fs from "fs";

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sum = 0;
let i = 0;
const allContents = fs.readFileSync("Number3/input.txt", "utf-8");
allContents.split(/\r?\n/).forEach((line) => {
    let firstpart = line.slice(0,(line.length/2));
    let secondpart = line.slice(((line.length/2)),line.length);
    for (const char of firstpart) {
        if (secondpart.includes(char)) {
          sum += alphabet.indexOf(char) + 1;
          break;
        }
    }
});

console.log(sum);
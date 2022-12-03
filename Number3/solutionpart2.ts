import fs from "fs";
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sum = 0;
let i = 0;
const allContents = fs.readFileSync("Number3/input.txt", "utf-8");
const arr = allContents.split(/\r?\n/);
for (let i = 0; i < arr.length; i += 3) {
    const char = Array.from(arr[i]).find(
      (char) => arr[i + 1].includes(char) && arr[i + 2].includes(char)
    );
    if (char) sum += alphabet.indexOf(char) + 1;
  }
console.log(sum);



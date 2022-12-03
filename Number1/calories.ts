import fs from "fs";
let arr: number[] = [];
let i = 0;
const allContents = fs.readFileSync("Number1/input.txt", "utf-8");
allContents.split(/\r?\n/).forEach((line) => {
  if (line.length > 0) {
    i += parseInt(line);
  } else {
    arr.push(i);
    i = 0;
  }
});
let sortarr = arr.sort();
let sum =
  sortarr[sortarr.length - 1] +
  sortarr[sortarr.length - 2] +
  sortarr[sortarr.length - 3];
arr.forEach((element) => {
  console.log("Log" + element);
});
console.log(sum);
console.log(Math.max(...arr));

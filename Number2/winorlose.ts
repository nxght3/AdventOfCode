enum signstouse {
  rock = 1,
  paper = 2,
  scissors = 3,
}

enum outcome {
  win = 6,
  lose = 0,
  draw = 3,
}
// X is lose
// Y is draw
// Z is win

// Rock = A
// Paper = B
// Scissors = C
let sum = 0;
import fs from "fs";
const allContents = fs.readFileSync("Number2/input.txt", "utf-8");
allContents.split(/\r?\n/).forEach((line) => {
  let arr = line.split(" ");
  if (arr[0] == "A") {
    if (arr[1] == "X") {
      sum += signstouse.scissors + outcome.lose;
    } else if (arr[1] == "Y") {
      sum += signstouse.rock + outcome.draw;
    } else if (arr[1] == "Z") {
      sum += signstouse.paper + outcome.win;
    }
  }
  if (arr[0] == "B") {
    if (arr[1] == "X") {
      sum += signstouse.rock + outcome.lose;
    } else if (arr[1] == "Y") {
      sum += signstouse.paper + outcome.draw;
    } else if (arr[1] == "Z") {
      sum += signstouse.scissors + outcome.win;
    }
  }
  if (arr[0] == "C") {
    if (arr[1] == "X") {
      sum += signstouse.paper + outcome.lose;
    } else if (arr[1] == "Y") {
      sum += signstouse.scissors + outcome.draw;
    } else if (arr[1] == "Z") {
      sum += signstouse.rock + outcome.win;
    }
  }
});

console.log(sum);

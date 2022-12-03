enum signs {
  rockX = 1,
  paperY = 2,
  scissorsZ = 3,
}
enum outcome {
  win = 6,
  lose = 0,
  draw = 3,
}
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
      sum += signs.rockX + outcome.draw;
    } else if (arr[1] == "Y") {
      sum += signs.paperY + outcome.win;
    } else if (arr[1] == "Z") {
      sum += signs.scissorsZ + outcome.lose;
    }
  } else if (arr[0] == "B") {
    if (arr[1] == "X") {
      sum += signs.rockX + outcome.lose;
    } else if (arr[1] == "Y") {
      sum += signs.paperY + outcome.draw;
    } else if (arr[1] == "Z") {
      sum += signs.scissorsZ + outcome.win;
    }
  } else if (arr[0] == "C") {
    if (arr[1] == "X") {
      sum += signs.rockX + outcome.win;
    } else if (arr[1] == "Y") {
      sum += signs.paperY + outcome.lose;
    } else if (arr[1] == "Z") {
      sum += signs.scissorsZ + outcome.draw;
    }
  }
});

console.log(sum);

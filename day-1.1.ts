import { readInput } from "./read-input";

const input = await readInput();
const splittedByLine = input.split("\n");
let result = 0;
splittedByLine.forEach((line) => {
  const chars = line.split("").filter((c) => c >= "0" && c <= "9");
  result += Number(chars[0] + chars[chars.length - 1]);
});

console.log({ result });

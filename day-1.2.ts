import { readInput } from "./read-input";

function isDigit(c: string, charIndex: number): string | undefined {
  if (c.charAt(charIndex) >= "0" && c.charAt(charIndex) <= "9") {
    return c.charAt(charIndex)
  }

  if (c.substring(charIndex, charIndex + 3) === "one") {
    return "1"
  }

  if (c.substring(charIndex, charIndex + 3) === "two") {
    return "2"
  }

  if (c.substring(charIndex, charIndex + 5) === "three") {
    return "3"
  }

  if (c.substring(charIndex, charIndex + 4) === "four") {
    return "4"
  }

  if (c.substring(charIndex, charIndex + 4) === "five") {
    return "5"
  }

  if (c.substring(charIndex, charIndex + 3) === "six") {
    return "6"
  }

  if (c.substring(charIndex, charIndex + 5) === "seven") {
    return "7"
  }

  if (c.substring(charIndex, charIndex + 5) === "eight") {
    return "8"
  }

  if (c.substring(charIndex, charIndex + 4) === "nine") {
    return "9"
  }
}

function toChars(line: string) {
  return line.split("").map((_, idx) => isDigit(line, idx)).filter(Boolean);
}



const input = await readInput()
const splittedByLine = input.split("\n");
let result = 0;
splittedByLine.forEach((line) => {
  const chars = toChars(line)
  console.log({ chars }, Number(chars[0] + chars[chars.length - 1]))
  result += Number(chars[0] + chars[chars.length - 1]);
});

console.log({ result });

// console.log(toChars("four82nine74"))
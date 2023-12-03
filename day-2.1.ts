import { readInput } from "./read-input";

function parseLine(
  line: string
): { green: number; blue: number; red: number }[] {
  const firstColonIndex = line.indexOf(":");
  const grabs = line.substring(firstColonIndex + 1).split(";");

  return grabs.map((g) => {
    const colorCounts = {
      green: 0,
      red: 0,
      blue: 0,
    };

    g.split(",").forEach((c) => {
      const [count, color] = c.trim().split(" ");
      colorCounts[color] = Number(count);
    });

    return colorCounts;
  });
}

// 12 red cubes, 13 green cubes, and 14 blue cubes.

const input = await readInput()
const splitted = input.split("\n")
let result = 0;
splitted.forEach((line, idx) => {
  const parsed = parseLine(line)

  if (parsed.every(({ red, green,  blue }) => red <= 12 && green <= 13 && blue <= 14 )) {
    result += (idx + 1)
  }
})
console.log({ result })

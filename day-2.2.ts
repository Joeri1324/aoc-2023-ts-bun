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

const input = await readInput();
const splitted = input.split("\n");
let result = 0;
splitted.forEach((line, idx) => {
  const parsed = parseLine(line);

  const {
    red,
    green,
    blue,
  } = parsed.reduce(
    (
      { red, blue, green },
      { red: maxRed, blue: maxBlue, green: maxGreen }
    ) => ({
      red: Math.max(red, maxRed),
      blue: Math.max(blue, maxBlue),
      green: Math.max(green, maxGreen),
    })
  );

  result += green * red * blue;
});
console.log({ result });

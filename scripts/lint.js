const path = require("path");
const fs = require("fs");

/**
 * Check if the package.json script has the same exercise scripts (e-01, s-02)
 * as the exercises in the src folder
 */

const packageJsonPath = path.resolve(__dirname, "../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const exercises = fs.readdirSync(path.resolve(__dirname, "../src"));
const exerciseFiles = exercises.filter((exercise) =>
  exercise.includes(".problem."),
);

const exerciseNames = exerciseFiles.map((exercise) => exercise.split("-")[0]);

const missingScripts = [];

exerciseNames.forEach((exercise) => {
  if (!packageJson.scripts[`e-${exercise}`]) {
    missingScripts.push(`e-${exercise}`);
  }
  if (!packageJson.scripts[`s-${exercise}`]) {
    missingScripts.push(`s-${exercise}`);
  }
});

if (missingScripts.length > 0) {
  console.log(`Scripts missing!`);
  console.log(missingScripts.join("\n"));
  process.exit(1);
}

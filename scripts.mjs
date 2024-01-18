/* eslint-disable no-case-declarations */
import { exec } from "child_process";
import { writeFile } from "fs/promises";

/**
 * 
 * @param {string} command 
 */
function commandOutput(command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if(err) reject(err);
      else resolve({ stdout, stderr });
    });
  });
}

(async () => {
switch(process.argv[process.argv.length - 1]) {
  case "generate":
    console.log("Adding eslint headers...");
    let contents = "";
    contents += "/* eslint-disable @typescript-eslint/ban-types */";
    contents += "/* eslint-disable @typescript-eslint/no-explicit-any */";
    console.log("Generating types...");
    contents += (await commandOutput("node ./node_modules/openapicmd/bin/run.js typegen ./src/lib/server/vrchat/openapi.json")).stdout
    await writeFile("./src/lib/vrchat/types.d.ts", contents);
    break;
};

})();
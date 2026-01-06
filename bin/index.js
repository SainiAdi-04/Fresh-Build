#!/usr/bin/env node

import { clean } from "../src/clean.js";
import { build } from "../src/build.js";
import { deploy } from "../src/deploy.js";

function showHelp() {
  console.log('USAGE:');
  console.log('  fresh-build <command>\n');
  
  console.log('COMMANDS:');
  console.log('  deploy     Deploy your project to Vercel (production)\n');
  
  console.log('PREREQUISITES:');
  console.log('  • Vercel CLI installed (npm i -g vercel)');
  console.log('  • Logged into Vercel (vercel login)\n');
  
  console.log('EXAMPLES:');
  console.log('  $ fresh-build deploy\n');
}

(async () => {
  const command=process.argv[2];

  try {
    // await clean();
    // await build();

    if(!command){
        showHelp();
        process.exit(0);
    }

    if(command==="help"|| command==="--help" || command==="-h"){
        showHelp();
        process.exit(0);
    }

    if(command==="deploy"){
        await deploy();
        process.exit(0);
    }

    console.error(`❌ Unknown command: ${command}\n`);
    showHelp();
    process.exit(1);



    // console.log("Build Succeeded");
  } catch (err) {
    // console.error("Build Failed", err.message)
    console.error("Command Failed");
    console.error(err.message);
    process.exit(1);
  }
})();

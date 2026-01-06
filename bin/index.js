#!/usr/bin/env node

import { clean } from "../src/clean.js";
import { build } from "../src/build.js";
import { deploy } from "../src/deploy.js";

(async ()=>{
    try{
        // await clean();
        // await build();
        await deploy();
        // console.log("Build Succeeded");
    }catch(err){
        // console.error("Build Failed", err.message)
        console.log("Deployment Failed",err.message);
        process.exit(1);
    }
})();
#!/usr/bin/env node
import { clean } from "../src/clean";

(async ()=>{
    try{
        await clean();
    }catch(err){
        console.log("Build Failed", err.message)
        process.exit(1);
    }
})
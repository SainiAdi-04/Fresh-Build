import {execSync} from 'child_process';

export async function deploy(){
    console.log("Deploying to Vercel (production)...");
    execSync("vercel --prod",{stdio:"inherit"})

}
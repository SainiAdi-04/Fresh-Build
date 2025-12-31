import { execSync } from "child_process";

export async function build(command="npm run build"){
    console.log('Running Build');
    execSync(command, {stdio:'inherit'});
}

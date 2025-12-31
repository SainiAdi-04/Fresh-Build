import fs from 'fs';

export async function clean(dir='dist'){
    if(fs.existsSync(dir)){
        console.log(`Removing ${dir}`);
        fs.rmSync(dir,{recursive:true, force:true})
    }
}
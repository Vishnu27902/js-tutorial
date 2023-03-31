
async function importFile(){
    let fileUpload = false;
    if(fileUpload)
    {
        return "File Uploaded";
    }
    else{
        throw "File not Uploaded";
    }
}

async function start(){
    try{
        console.log(importFile())
    }
    catch(err){
        console.log(err);
    }
}

start()
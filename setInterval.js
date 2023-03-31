const interval = setInterval(func,1000);

function func(){
    const a=new Date();
    console.log(a.getSeconds())
    if(a.getSeconds()==00){
        clearInterval(interval);
    }
}
a="abcde2434;]";
validate(a);
function validate(string){
    expression=/^[0-9a-zA-Z\s]+$/;
    if(!expression.test(string)){
        console.log("check the input once again");
    }
    else{
        console.log("loggedin");
    }
}

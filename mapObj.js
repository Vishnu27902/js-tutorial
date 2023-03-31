arr=[1,2,3,4,5,6,7,8,9,10]

newarr = arr.map(sqrt)

newarr.map(print) 

function sqrt(element){
    return element**2;
}

function print(element){
    console.log(element);
}
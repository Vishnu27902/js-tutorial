arr=[1,2,3,4,5,6,7,8,9,10]

total=arr.reduce(tot)


function tot(total,element){
    return  total+element;
}

console.log(total)
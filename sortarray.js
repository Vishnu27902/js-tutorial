arr=[9,8,7,6,6,5,4,3,32,1,2]

arr.sort(as)
console.log(arr)
arr.sort(ds)
console.log(arr)

function as(element1,element2)
{
    return element1-element2;
}

function ds(element1,element2){
    return element2-element1;
}
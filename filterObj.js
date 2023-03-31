a=[1,34,78,2,45,675,123,34,76,23,56];

greaterarr=a.filter(greaterThan);

greaterarr.map(element=>console.log(element))       //arrow function

function greaterThan(element){
    return element>50;
}
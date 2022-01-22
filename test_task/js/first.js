let arr=[2, 4, 5 ,6];

// create new array with map

let nar = arr.map((a) => a*2 )
console.log(nar);


// create new array with forEach

let nar1=[];
arr.forEach((value, index) =>
{nar1[index] = arr[index]* 2})
console.log(nar1);


// create new array with for

let nar2=[];
for(let i=0; i<arr.length; i++){
    nar2[i]=arr[i]*2;        
}
console.log(nar2);


// create new array with for...of

let nar3=[];
let i=0;
for (let number of arr) {
    nar3[i]=number*2;
    i++;
}
console.log(nar3);

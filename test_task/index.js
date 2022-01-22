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

    //PRIME TASKS

let n = prompt("Type number here", "");
const primes = [];
for (let i = 2; i <= n; i++) {
  for (let j = 2; j <= n; j++) {
    if ((i % j == 0) && (j != i)) {
        break;
    } else {
        primes.push(i)
        break;
    }
  }
}
console.log(primes);

let n2 = prompt("Type number here", "");
for (let i = 2; i <= n2; i++) {
    if ((n2 % i == 0) && (n2 != i)) {
        break;
    } else {
        console.log(n2,'it`s a prime num')
        break;
    }
}


 let number = prompt("Type number here", "");
    if((number%2===0) || (number%3===0)|| (number%5===0)|| (number%7===0)){
        console.log(number,'not a prime');
    }else{
        console.log(number,'it`s a prime num');
    }



let number2 = prompt("Type number here", "");
const seive = [];
const primes2 = [];
for( let i=2; i<number2; i++){
    if(!seive[i]){
        primes2.push(i);
        for(let j = i*i; j<number2; j+=i){
            seive[j]=true;
        }
    }
}
console.log(primes2);


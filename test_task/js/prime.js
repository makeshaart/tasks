
    //PRIME TASKS

function isPrime(n){
    if( n < 1 ){
        return null;
    }
    for (let i = 2 ; i <= Math.sqrt(n) ; i++) {
        // проходим по проверяемому числу циклом , проверяем есть ли еще делитель
        // который при взятии остатка оставит 1
        if (n % i == 0 ) {
            return false;
        }
        // число удолетворяющее условию возвращаем, проверяя еще одно условие 
        // для простого числа 
    }
    return true;
}
console.log(isPrime(49));
    

function getPrime(n){
    // создаем массив в который поместим простые числа
    const primes = [];
    // создаем двойной цикл, чтобы пройтись по все числам в заданом промежутке проверяя
    // условия простого числа
    for (let i = 2; i <= n; i++) {
        if(isPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}
console.log(getPrime(55));





function getPrimeSeive(number){
    // создаем 2 массива: для простых чисел и для тех что не подходят
    const seive = [];
    const primes = [];
    // содаем цикл до заданного числа
    for( let i=2; i<number; i++){
        // проверяем условие что число не попал в наш массив с отсеяными числами
        if(!seive[i]){
            // то добавляем число в массив для простых чисел
            primes.push(i);
            // создаем цикл чтобы добавить в массив отсеяными числами все числа кратные 
            // проверяемому числу
            for(let j = i*i; j<number; j+=i){
                seive[j]=true;
            }
        }
    }
    return primes;
}
console.log(getPrimeSeive(55));

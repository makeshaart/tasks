
    //PRIME TASKS
function getPr1(n){
    // создаем массив в который поместим простые числа
    const primes = [];
    // создаем двойной цикл, чтобы пройтись по все числам в заданом промежутке проверяя
    // условия простого числа
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j <= i; j++) {
            // проверяем делится ли само на себя, только один раз 
            // исключаем дополнительные делители
            if (i % j === 0) continue ;
        }
        // те что подходят условию добавляем 
        primes.push(i);
    }
    // собираем массив
    return primes;
}
console.log(getPr1(10));



function showPr2(n){
    // создаем цикл
    for (let i = 2; i <= n; i++) {
        // проходим по проверяемому числу циклом , проверяем есть ли еще делитель
        // который при взятии остатка оставит 1
        if (n % i === 0 ) {
            return false;
        }
        // число удолетворяющее условию возвращаем, проверяя еще одно условие 
        // для простого числа 
        return n > 1;
    }
}
console.log(showPr2(49));



function getPr4(number){
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
console.log(getPr4(55));
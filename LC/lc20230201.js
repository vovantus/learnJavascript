// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
//
//     input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.
//     output
// The function should return an integer, the total time required.

function queueTime(customers, n) {

    let time = 0;
    let currentMinTime = 0;
    let currentMaxTime = 0;
    let tmpTime = 0;
    let desks = [];

    // создаем кассы
    for (let i = 0; i < n; i++) {
        desks.push(0)
    }

    do {

        // вычитаем время обслуживания самого быстрого пользователя и сразу ставим в освободившуюся кассу следующего из очереди
        for (let i = 0; i<n; i++) {
            desks[i] = desks[i] - currentMinTime;
            if (desks[i] === 0) {
                if (customers.length>0){
                    desks[i] = customers.shift();
                }
            } else {
                tmpTime = desks[i];
            }
        }

        // прибывляем время потраченное на обслуживание пользователя
        time +=currentMinTime;
        currentMinTime = tmpTime;
        currentMaxTime = 0;
        // ищем время обслуживание самого быстрого и самого медленного пользователя
        for (let i = 0; i<n; i++) {
            if (desks[i]!== 0) {
                if (currentMinTime > desks[i]) {
                    currentMinTime = desks[i]
                }
                if (currentMaxTime < desks[i]) {
                    currentMaxTime = desks[i]
                }
            }
        }
    } while (customers.length>0)
    return time+currentMaxTime

}

function queueTimeTicker(customers, n) {
    let desks = [];
    let time = 0;

    // создаем и сразу заполняем касыы
    for (let i = 0; i < n; i++) {
        desks.push(customers.shift());
    }

    // запускаме счетчик и после каждого прохода уменьшаем на 1, если касса освободилась - переносим покупателя из очереди
    do {
        for (let i = 0; i < n; i++) {
            if (desks[i] === 0){
                if (customers.length>0) {
                    desks[i]=customers.shift();
                }
                desks[i] -= 1;
            } else {
                desks[i] -= 1;
            }
        }
        time += 1;
    } while (customers.length>0);

    return time + Math.max(...desks);
}

console.log(queueTime([5, 3, 4], 1)); // => 12
console.log(queueTime([10, 2, 3, 3], 2));// => 10
console.log(queueTime([2, 3, 10], 2)); // => 12
console.log(queueTime([16, 14, 10, 3, 13, 9, 8, 19, 18, 20, 3, 7, 4, 16, 3], 6)); //=> 32


console.log('time ticker')
console.log(queueTimeTicker([5, 3, 4], 1)); // => 12
console.log(queueTimeTicker([10, 2, 3, 3], 2));// => 10
console.log(queueTimeTicker([2, 3, 10], 2)); // => 12
console.log(queueTimeTicker([16, 14, 10, 3, 13, 9, 8, 19, 18, 20, 3, 7, 4, 16, 3], 6)); //=> 32



//===========================
// решение Эдика

function queueTime(customers, n) {
    if (n === 1) return customers.reduce((acc, item) => acc + item);

    let aboba = new Array(n).fill(0);
    // console.log(aboba);

    for (let i = 0; i < customers.length; i++) {
        aboba[n - 1] += customers[i];
        aboba.sort((a, b) => b - a);
        // console.log(aboba);
    }

    return Math.max(...aboba);
}

console.log(queueTime([5, 3, 4], 1)); // => 12
console.log(queueTime([10, 2, 3, 3], 2)); // => 10
console.log(queueTime([2, 3, 10], 2)); // => 12
console.log(
    queueTime([16, 14, 10, 3, 13, 9, 8, 19, 18, 20, 3, 7, 4, 16, 3], 6)
); //=> 32


//===========================
// решение Виктора

function queueTime(customersarr, n) {
    if (n === 1) return sumArr(customersarr);
    const kassyTime = [];
    if (customersarr.length < n) return Math.max(...customersarr);

    for (let i = 0; i < n; i++) {
        kassyTime.push(customersarr[i]);
        // console.log('🚀 ~ file: Kassy.js:30 ~ queueTime ~ kassyTime', kassyTime);
    }
    //   console.log('index lower kassa:', findLowerIndex(kassyTime));
    for (let i = n; i < customersarr.length; i++) {
        kassyTime[findLowerIndex(kassyTime)] += customersarr[i];
        // console.log('🚀 ~ file: Kassy.js:37 ~ queueTime ~ kassyTime', kassyTime);
    }

    return Math.max(...kassyTime);
}
function sumArr(arr) {
    return arr.reduce((sum, elem) => elem + sum, 0);
}
function findLowerIndex(arr) {
    return arr.indexOf(Math.min.apply(null, arr));
}
console.log(queueTime([5, 3, 4], 1)); // => 12
console.log(queueTime([10, 2, 3, 3], 2)); // => 10
console.log(queueTime([2, 3, 10], 2)); // => 12
console.log(
    queueTime([16, 14, 10, 3, 13, 9, 8, 19, 18, 20, 3, 7, 4, 16, 3], 6)
); //=> 32
let n = 15; // Кількість елементів
let fibo = [1, 1]; // Перші два елемента

for (i = 2; i < n; i++) {
  
  fibo[i] = fibo[i-1] + fibo[i-2];
}

console.log(fibo.slice(0,n));



function fib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    else return fib(n-1) + fib(n-2);
} //利用遞迴輸出所求費氏數之前兩個費氏數的總和

console.log(fib(0)); //輸出fib(0)的結果，確認為0
console.log(fib(1)); //輸出fib(1)的結果，確認為1
console.log(fib(5)); //輸出fib(5)的結果，確認為5
console.log(fib(10)); //輸出fib(10)的結果，確認為55
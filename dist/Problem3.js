// PROBLEM 3
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
function isPrime(n) {
    const sqrtN = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= sqrtN; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
// Naive Method
let maxPrimeFactor = 1;
const target = 600851475143;
const boundary = Math.floor(Math.sqrt(target));
for (let i = 0; i < boundary; i++) {
    if (target % i === 0 && isPrime(i)) {
        maxPrimeFactor = i;
    }
}
console.log(maxPrimeFactor);
// Suggested Improvement: create a factorize method that recursively finds all prime factors
// of a given number. Sort that list and return the last entry.

// PROBLEM 5

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// Reasoning: No programming required - compute the prime factorization of each number from 1 to 20.
// For each factorization, multiply together the factorization with the highest exponent.
console.log(16 * 9 * 5 * 7 * 11 * 13 * 17 * 19);
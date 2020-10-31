// PROBLEM 6
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
const squareOfSumFirstHundred = 5050 * 5050; // 50 pairs of 101, all squared
let sumOfSquaresFirstHundred = 0;
for (let i = 1; i <= 100; i++) {
    sumOfSquaresFirstHundred += (i * i);
}
// Optimal method idea: derive a formula for the sum of squares.
// Assume it is of the form f(x) = a * x ^ 3 + b * x ^ 2 + c * x + d
console.log(squareOfSumFirstHundred - sumOfSquaresFirstHundred);

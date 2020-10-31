export function isPrime(n) {
    // Early Return: number is even and not 2
    if (n % 2 === 0 && n !== 2) {
        return false;
    }
    // Else, test integers under the square root of n
    const sqrtN = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= sqrtN; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

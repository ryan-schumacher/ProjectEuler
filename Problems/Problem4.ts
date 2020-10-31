// PROBLEM 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(n: number): boolean
{
    let nString = n.toString();
    const nLength = nString.length;
    for (let i = 0; i < nLength; i++)
    {
        if (nString.charAt(i) !== nString.charAt(nLength - 1 - i))
        {
            return false;
        }
    }

    return true;
}

let largestPalindromeProduct = 0;
for (let i = 100; i <= 999; i++)
{
    for (let j = 100; j <= 999; j++)
    {
        const product = i * j;
        if (isPalindrome(product) && product > largestPalindromeProduct)
        {
            largestPalindromeProduct = product;
        }
    }
}

console.log(largestPalindromeProduct);
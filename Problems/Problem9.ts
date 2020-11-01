// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a2 + b2 = c2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function isPythagoreanTriple(a: number, b: number, c:number)
{
    return (a * a) + (b * b) === (c * c);
}

// Optimization: Cap a, b, c such that a + b + c = 1000 is guaranteed by the for loop restrictions
for (let a = 1; a < 1000; a++)
{
    for (let b = 1; b < 1000; b++)
    {
        for (let c = 1; c < 1000; c++)
        {
            if (isPythagoreanTriple(a, b, c))
            {
                if (a + b + c === 1000)
                {
                    console.log(a * b * c);
                }
            }
        }
    }
}
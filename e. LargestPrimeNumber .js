// Extract the first 100 digits of π (excluding the decimal point).
// Check all 5-digit substrings and find the largest prime number.
// Use an efficient primality test (like trial division or Miller-Rabin for larger cases).

function isPrime(num) {
    if (num < 2) return false;
    if (num % 2 === 0 && num !== 2) return false;
    
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    
    return true;
}

function findLargest5DigitPrimeInPi() {
    const piDigits = "14159265358979323846264338327950288419716939937510" +
                     "58209749445923078164062862089986280348253421170679";
    
    let largestPrime = -1;
    
    for (let i = 0; i <= piDigits.length - 5; i++) {
        let num = parseInt(piDigits.substring(i, i + 5));
        
        if (isPrime(num) && num > largestPrime) {
            largestPrime = num;
        }
    }
    
    return largestPrime;
}

console.log("Largest 5-digit prime in first 100 digits of Pi:", findLargest5DigitPrimeInPi());











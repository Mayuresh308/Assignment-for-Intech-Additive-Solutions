function countConsecutiveSums(n) {
    let count = 0;
    
    for (let m = 1; m * (m - 1) / 2 < n; m++) {
        let remainder = n - (m * (m - 1)) / 2;
        if (remainder % m === 0) {
            count++;
        }
    }
    
    return count;
}

// Test Cases
const testCases = [15, 9, 10, 5, 100];

testCases.forEach(tc => {
    console.log(`Ways to express ${tc} as sum of consecutive numbers: ${countConsecutiveSums(tc)}`);
});

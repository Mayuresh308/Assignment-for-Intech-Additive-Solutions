// 1. Create an empty result matrix C of size n X n initialized with zeros.
// 2. Loop through each row of A and each column of B
// 3. Multiply corresponding elements and sum them up to get C[i]li]
// 4. Return the final matrix


function multiplyMatrices(A, B) {
    let n = A.length;
    let C = Array.from({ length: n }, () => Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    
    return C;
}

// Test Case
const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const B = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

console.log("Resultant Matrix:", multiplyMatrices(A, B));

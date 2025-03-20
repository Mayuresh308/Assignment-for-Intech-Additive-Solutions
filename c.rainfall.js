// I checked the GeeksforGeeks page for variations, for the standard two-pointer method to solve this efficiently in O(n) time.

// We need to calculate the water trapped at each position.
// The amount of water above a position depends on the minimum of the left and right max heights minus the height at that position.
// The two-pointer approach keeps track of left and right maximums and calculates trapped water in one pass.

function trapRainWater(height) {
    if (!height || height.length === 0) return 0;
    
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    
    return water;
}

// Test Cases
const testCases = [
    [2, 1, 3, 0, 1, 2, 3],  // Expected output: 7
    [4, 2, 0, 3, 2, 5],     // Expected output: 9
    [3, 0, 2, 0, 4],        // Expected output: 7
    [1, 1, 1, 1],          // Expected output: 0 (flat surface)
    [5, 4, 3, 2, 1],       // Expected output: 0 (descending)
];

testCases.forEach(tc => {
    console.log(`Water trapped in ${JSON.stringify(tc)}: ${trapRainWater(tc)}`);
});

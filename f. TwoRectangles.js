// A rectangle is defined by its bottom-left (x1, y1) and top-right (x2, y2) corners.
// Two rectangles intersect if their projections on both the x-axis and y-axis overlap.
// Non-Intersection Conditions:
// If one rectangle is completely to the left of the other → No overlap.
// If one rectangle is completely above the other → No overlap.

// For two rectangles R1 and R2 defined by:

// R1: (x1, y1, x2, y2)
// R2: (a1, b1, a2, b2)
// They do NOT intersect if:

// Horizontal separation: x2 < a1 (R1 is left of R2) or a2 < x1 (R2 is left of R1).
// Vertical separation: y2 < b1 (R1 is below R2) or b2 < y1 (R2 is below R1).

function doRectanglesIntersect(r1, r2) {
    let [x1, y1, x2, y2] = r1; // Rectangle 1
    let [a1, b1, a2, b2] = r2; // Rectangle 2
    
    // Check if one rectangle is completely to the left or right of the other
    if (x2 < a1 || a2 < x1) return false;
    
    // Check if one rectangle is completely above or below the other
    if (y2 < b1 || b2 < y1) return false;
    
    return true; // Otherwise, they intersect
}

// Test Cases
const testCases = [
    [[0, 0, 4, 4], [2, 2, 6, 6]], // Overlapping - True
    [[0, 0, 4, 4], [5, 5, 7, 7]], // No Overlap - False
    [[1, 1, 3, 3], [2, 2, 4, 4]], // Overlapping - True
    [[0, 0, 2, 2], [3, 3, 5, 5]], // No Overlap - False
    [[0, 0, 5, 5], [1, 1, 4, 4]]  // One inside another - True
];

testCases.forEach(([r1, r2], index) => {
    console.log(`Test ${index + 1}: ${doRectanglesIntersect(r1, r2)}`);
});

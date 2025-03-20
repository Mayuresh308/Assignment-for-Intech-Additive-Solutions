// Since I already understand Run-Length Encoding (RLE), I didn’t need to search much. However, 
// I checked the Educative.io link to see if they had a different approach, but I couldn't access it directly.

// Run-Length Encoding (RLE): It replaces consecutive repeating characters with the character followed by its count. 
// Example: "aabcccccaaa" → "a2b1c5a3".

// Second-Level Compression: Further optimizes the output by removing 1s and simplifying where possible. 
// Example: "a2b2c1a3c3" → "ab2c1ac3".

// Decompression: Reverses the compression to restore the original string.

function firstCompression(s) {
    let compressed = "";
    let count = 1;
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            compressed += s[i - 1] + count;
            count = 1;
        }
    }
    compressed += s[s.length - 1] + count; // Append last character
    return compressed;
}

function secondCompression(s) {
    return s.replace(/(\D)1/g, "$1"); // Remove '1' after a letter
}

function decompression(s) {
    let decompressed = "";
    let matches = [...s.matchAll(/(\D)(\d*)/g)]; // Match letters and optional numbers
    
    for (let match of matches) {
        let char = match[1];
        let count = match[2] ? parseInt(match[2]) : 1;
        decompressed += char.repeat(count);
    }
    
    return decompressed;
}

// Test Cases
const testStrings = [
    "aabcccccaaa",   // Basic case
    "a2b2c1a3c3",    // Needs second compression
    "a20b20c1a4",    // Large counts
    "abc",           // No compression needed
    "a11b1c3",       // Already compressed
    "a1b1c1d1",      // Should reduce to "abcd"
];

testStrings.forEach(test => {
    let compressed = firstCompression(test);
    let furtherCompressed = secondCompression(compressed);
    let decompressed = decompression(furtherCompressed);
    
    console.log(`Original: ${test}`);
    console.log(`First Compression: ${compressed}`);
    console.log(`Second Compression: ${furtherCompressed}`);
    console.log(`Decompressed: ${decompressed}`);
    console.log("-");
});












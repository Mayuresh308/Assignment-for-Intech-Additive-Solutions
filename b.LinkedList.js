// I already know the Floyd’s Tortoise and Hare Algorithm (also called the slow and fast pointer approach).

// Singly Linked List: A data structure where each node points to the next.
// One-Pass Solution: Use two pointers:
// Slow pointer moves one step at a time.
// Fast pointer moves two steps at a time.
// When the fast pointer reaches the end, the slow pointer is at the middle.


class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findMiddle(head) {
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow.value;
}

// Test Cases
function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    
    return head;
}

const testLists = [
    [1, 2, 3, 4, 5],        // Odd length, middle is 3
    [1, 2, 3, 4, 5, 6],     // Even length, middle is 4
    [10],                   // Single element, middle is 10
    [1, 2],                 // Two elements, middle is 2
    [1, 2, 3, 4, 5, 6, 7]   // Odd length, middle is 4
];

testLists.forEach(list => {
    let head = createLinkedList(list);
    console.log(`Middle of ${JSON.stringify(list)}: ${findMiddle(head)}`);
});

/*
Problem:
Find all indexes where a target value occurs.

Example:
Input: [2, 5, 2, 8, 2, 5, 9]
Target: 2

Output:
Indexes: 0, 2, 4
Count: 3

Approach:
Traverse the complete array.
Whenever the current value equals the target,
print its index and increase the count.

Time Complexity: O(n)
Space Complexity: O(1)
*/

let numbers = [2, 5, 2, 8, 2, 5, 9];

function findAllIndexes(numbers, target) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      count = count + 1;
      console.log("At index:", i);
    }
  }

  return count;
}

console.log("Count:", findAllIndexes(numbers, 2));
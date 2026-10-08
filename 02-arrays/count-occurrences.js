/*
Problem:
Count how many times a target value occurs in an array.

Example:
Input: [2, 5, 2, 8, 2, 5, 9]
Target: 2

Output:
3

Approach:
Start count at 0.
Traverse the array.
Whenever the current element equals the target,
increase count by 1.

Time Complexity: O(n)
Space Complexity: O(1)
*/

let numbers = [2, 5, 2, 8, 2, 5, 9];

function countValue(numbers, target) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      count = count + 1;
    }
  }

  return count;
}

console.log(countValue(numbers, 2));
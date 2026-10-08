/*
Problem:
Find the first occurrence of a target value in an array.

Example:
Input: [5, 8, 3, 2, 9, 2]
Target: 2

Output:
3

If the target is not found:
Output: -1

Approach:
Initialize index as -1 because -1 means "not found".

Traverse the array.
When the target is found:
- Store the current index.
- Stop the loop using break.

If the target is never found, index remains -1.

Time Complexity: O(n)
Space Complexity: O(1)
*/

let numbers = [5, 8, 3, 2, 9, 2];

function findIndex(numbers, target) {
  let index = -1;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      index = i;
      break;
    }
  }

  return index;
}

console.log(findIndex(numbers, 2));
console.log(findIndex(numbers, 7));
/*
Problem:
Find the largest number in an array.

Example:
Input: [4, 7, 2, 9, 1]
Output: 9

Approach:
Start with the first element as the largest.
Traverse the array and update largest whenever
a larger value is found.

Time Complexity: O(n)
Space Complexity: O(1)
*/

let numbers = [4, 7, 2, 9, 1];

function findMax(numbers) {
  let largest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

console.log(findMax(numbers));
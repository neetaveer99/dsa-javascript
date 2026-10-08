/*
Problem:
Find the smallest number in an array.

Example:
Input: [4, 7, 2, 9, 1]
Output: 1

Approach:
1. Assume the first element is the smallest.
2. Traverse the array.
3. Compare each element with the current smallest value.
4. If a smaller value is found, update smallest.
5. Return the smallest value.

Time Complexity: O(n)
Space Complexity: O(1)
*/

let numbers = [4, 7, 2, 9, 1];

function findMin(numbers) {
  let smallest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }

  return smallest;
}

console.log(findMin(numbers));
/*
Problem:
Find the second largest number in an array.

Example:
Input: [4, 7, 2, 9, 3]
Output: 7

Approach:
Keep track of the largest and second largest values.

If the current number is greater than largest:
- Move the old largest to secondLargest.
- Update largest.

Otherwise, if the current number is between
secondLargest and largest, update secondLargest.

Time Complexity: O(n)
Space Complexity: O(1)
*/

let numbers = [4, 7, 2, 9, 3];

function findSecondLargest(numbers) {
  let largest = numbers[0];
  let secondLargest = numbers[1];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      secondLargest = largest;
      largest = numbers[i];
    } else if (
      numbers[i] > secondLargest &&
      numbers[i] < largest
    ) {
      secondLargest = numbers[i];
    }
  }

  return secondLargest;
}

console.log(findSecondLargest(numbers));
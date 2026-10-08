/*
Problem:
Find the second smallest number in an array.

Example:
Input: [4, 7, 2, 3, 1]
Output: 2

Approach:
Keep track of the smallest and second smallest values.

If the current number is smaller than smallest:
- Move the old smallest to secondSmall.
- Update smallest.

Otherwise, if the current number is between
smallest and secondSmall, update secondSmall.

Time Complexity: O(n)
Space Complexity: O(1)
*/

let numbers = [4, 7, 2, 3, 1];

function findSecondSmallest(numbers) {
  let smallest = numbers[0];
  let secondSmall = numbers[1];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      secondSmall = smallest;
      smallest = numbers[i];
    } else if (
      numbers[i] < secondSmall &&
      numbers[i] > smallest
    ) {
      secondSmall = numbers[i];
    }
  }

  return secondSmall;
}

console.log(findSecondSmallest(numbers));
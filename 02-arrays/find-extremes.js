/*
Problem:
Find the largest, second largest, smallest,
and second smallest numbers in an array.

Example:
Input: [6, 2, 9, 4, 1, 8]

Output:
Largest: 9
Second Largest: 8
Smallest: 1
Second Smallest: 2

Approach:
Use one loop to track all four values.

Time Complexity: O(n)
Space Complexity: O(1)
*/

let numbers = [6, 2, 9, 4, 1, 8];

function findExtremes(numbers) {
  let largest = numbers[0];
  let secondLargest = numbers[1];

  let smallest = numbers[0];
  let secondSmall = numbers[1];

  for (let i = 0; i < numbers.length; i++) {

    // Find largest and second largest
    if (numbers[i] > largest) {
      secondLargest = largest;
      largest = numbers[i];
    } else if (
      numbers[i] > secondLargest &&
      numbers[i] < largest
    ) {
      secondLargest = numbers[i];
    }

    // Find smallest and second smallest
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

  return {
    largest,
    secondLargest,
    smallest,
    secondSmall
  };
}

console.log(findExtremes(numbers));
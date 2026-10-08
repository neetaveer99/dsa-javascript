/*
Problem:
Understand how additional memory affects space complexity.

Example 1:
Only a fixed number of variables are created.

*/

function calculateSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  return sum;
}

/*
Only a fixed number of variables are used.

Space Complexity: O(1)
*/


/*
Example 2:
A new array is created containing n elements.
*/

function createCopy(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i]);
  }

  return result;
}

/*
The result array grows with the input size.

Space Complexity: O(n)
*/
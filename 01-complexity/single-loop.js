/*
Problem:
Determine the time complexity of the following code.

*/

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

/*
Analysis:

The loop runs once for every element.

If there are n elements,
the loop runs n times.

Time Complexity: O(n)
Space Complexity: O(1)
*/
/*
Problem:
Determine the time complexity of nested loops.

*/

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[i], numbers[j]);
  }
}

/*
Analysis:

Outer loop runs n times.
Inner loop runs n times for every outer iteration.

n × n = n²

Time Complexity: O(n²)
Space Complexity: O(1)
*/
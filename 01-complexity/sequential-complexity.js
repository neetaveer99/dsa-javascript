/*
Problem:
Determine the overall time complexity when
different operations run one after another.

*/

let numbers = [1, 2, 3, 4, 5];

// O(n)
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// O(n²)
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[i], numbers[j]);
  }
}

/*
The operations are sequential, so we add them:

O(n) + O(n²)

Keep the fastest-growing term:

O(n²)

Overall Time Complexity: O(n²)
Space Complexity: O(1)
*/
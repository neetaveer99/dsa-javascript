/*
Problem:
Determine the time complexity of a loop
that repeatedly doubles the value.

*/

let n = 16;

for (let i = 1; i < n; i = i * 2) {
  console.log(i);
}

/*
Values:
1 → 2 → 4 → 8 → 16

The value doubles each time,
so the number of iterations grows logarithmically.

Time Complexity: O(log n)
Space Complexity: O(1)
*/
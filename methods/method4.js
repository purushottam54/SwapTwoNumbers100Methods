// Function to swap values using a tuple
function swap_using_tuple(a, b) {
  return [b, a]; // Return the values as an array [b, a]
}

let a = 5;
let b = 4;

let c = swap_using_tuple(a, b);
console.log(c); // Output: [4, 5]

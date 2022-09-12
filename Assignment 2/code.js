console.clear();
console.log('----');

function mergeSort(arr) {
  // Base Case - to return sorted list (i.e. single numbers)
  if (arr.length <= 1) {
    return arr
  }
  // Finding Mid-point
  let mid = arr.length / 2;
  // Seperating RHS and LHS of array
  let LHS = arr.splice(0, mid);
  let RHS = arr;          // RHS is just equal to whatever was leftover in the splicing
  return merge(mergeSort(LHS), mergeSort(RHS));
}

function merge(LHS, RHS) {
  let sorted = []

  while (LHS.length > 0 && RHS.length > 0) {
      if (LHS[0] < RHS[0]) {
        sorted.push(LHS[0]);
        LHS.shift();
      } else {    // Else add the other value to the array
        sorted.push(RHS[0]);
        RHS.shift();
      }
  }
  // Adding leftover elements to the merged array
  if (LHS > 0) {sorted.push(LHS)};
  if (RHS > 0) {sorted.push(RHS)};
  return sorted
}

inp = [1,8,2,6,7,3,5,4,9];
a = mergeSort(inp);
console.log('ans: '+a)

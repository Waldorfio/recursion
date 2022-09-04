console.clear();
console.log('----');


newArr = [];
function mergeSort(arr) {

    // Base Case
    

    // Split
    if (arr.length > 2) {

    }

    //
    if (arr.length == 2) {
        if (arr[0] > arr[1]) {
            max = arr[0];
            min = arr[1];
        } else if (arr[0] < arr[1]) {
            max = arr[1];
            min = arr[0];
        }
        newArr.push(min);
        newArr.push(max);
    }
    //
    if (arr.length == 1) {
        newArr.push(arr);
    }



}

// Pseudocode
// if left > right 
// return
// mid = (left+right)/2
// mergeSort(arr, left, mid)
// mergeSort(arr, mid+1, right)
// merge(arr, left, mid, right)
// end

mergeSort([8,9,3,8,7,5]);
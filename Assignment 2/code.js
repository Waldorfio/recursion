console.clear();
console.log('----');


newArr = [];
function mergeSort(arr) {

    // Base Case
    if (arr[0] > arr[-1]) {
        console.log('done: '+newArr);
        return
    }
    
    mid = Math.ceil(arr.length/2);

    mergeSort(arr.slice(0, mid));
    mergeSort(arr.slice(mid+1, arr.length));

    // Merge




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
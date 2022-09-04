console.clear();
console.log('------');

let fibArr = [];
i = 0;

function fibs(num) {

    // Base Case
    if (i==(num)) {
        console.log('output: '+fibArr);
        return
    }

    // First two fibonacci numbers
    if (i==0) {
        fibArr.push(0)
        fibArr.push(1)
        i = i + 2;
    }

    newFib = fibArr[i-1] + fibArr[i-2];
    fibArr.push(newFib);    
    i = i + 1;
    fibs(num);      // Recursion

}

fibs(8);
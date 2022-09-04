console.clear();
console.log('------');

let fibArr = [];
let i = 0;

function fibs(num) {

    // Base Case
    if (i==(num)) {
        console.log('output: '+fibArr);
        return
    }

    // First two fibonacci numbers
    if (i==0) {
        fibArr.push(0, 1)
        i += 2;
    }

    fibArr.push(fibArr[i-1] + fibArr[i-2]);    
    i += 1;
    fibs(num);      // Recursion

}

fibs(3);    // returns [0,1,1]
fibs(8);    // returns [0,1,1,2,3,5,8,13]
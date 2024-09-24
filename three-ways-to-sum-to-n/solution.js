/*Provide 3 unique implementations of the following function in JavaScript.
**Input**: `n` - any integer
*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.
**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.*/

const MAX_INT = Number.MAX_SAFE_INTEGER;

const sum_to_n_a = function(n) {
    let i = 0, result = 0;

    while(i <= n) { //or for | forEach | reduce
        result += i;
        i++;
    }

    return Math.min(result, MAX_INT);
};

const sum_to_n_b = function(n) {
    const result = (n * n + n) / 2;

    return result <= MAX_INT ? result : MAX_INT;
};

const sum_to_n_c = function(n) {
    if (n === 1) return 1;

    const result = n + sum_to_n_b(n - 1);
    
    return result <= MAX_INT ? result : MAX_INT;
};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));
var SumSlide2 = function (arr, k) {
    var solu = [];
    var sumK = arr.slice(0, k).reduce(function (total, x) { return total + x; }, 0);
    solu.push(sumK);
    for (var i = 1; i < arr.length - k + 1; i++) {
        sumK = sumK - arr[i - 1];
        sumK = sumK + arr[i + k - 1];
        console.log(sumK);
        solu.push(sumK);
    }
    return solu;
};
console.log(SumSlide2([2, 3, 4, 1], 3));

// given an array of size n and a window of size k return the sum of each k subarray 
var sumSlideWindow = function (arr, k) {
    var tempsum = arr.slice(0, k).reduce(function (total, x) { return total + x; }, 0);
    console.log(tempsum);
    var sumResult = [tempsum];
    for (var i = 1; i <= arr.length - k; i++) {
        tempsum = tempsum - arr[i - 1];
        tempsum = tempsum + arr[i + k - 1];
        sumResult.push(tempsum);
    }
    return sumResult;
};
console.log(sumSlideWindow([2, 4, 3, 3, 4, 5], 3));

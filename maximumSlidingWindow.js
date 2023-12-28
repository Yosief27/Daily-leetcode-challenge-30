var maximumSlidingWindow = function (arr, k) {
    var solution = "";
    var qArr = [];
    var i = 0;
    for (i; i < k; i++) {
        while (qArr.length !== 0 && arr[i] >= arr[qArr[qArr.length - 1]]) {
            qArr.pop();
        }
        qArr.push(i);
    }
    // add answer
    solution += arr[qArr[0]] + "";
    //moving to the next window
    for (i; i < arr.length; i++) {
        console.log(qArr, i);
        while (qArr.length !== 0 && qArr[0] <= i - k) {
            qArr.shift();
            console.log(qArr);
        }
        while (qArr.length !== 0 && arr[i] >= arr[qArr[qArr.length - 1]]) {
            qArr.pop();
        }
        qArr.push(i);
        solution += " ," + arr[qArr[0]];
    }
    return solution;
};
console.log(maximumSlidingWindow([12, 23, 43, 24, 12, 12, 6], 3));

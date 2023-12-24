var maximumSlidingWindow = function (arr, k) {
    var str = "";
    var QArr = [];
    var i;
    for (i = 0; i < k - 1; i++) {
        while (QArr.length !== 0 && arr[i] >= arr[QArr[QArr.length - 1]]) {
            QArr.shift();
        }
        QArr.push(i);
    }
    for (i; i < arr.length; i++) {
        str += arr[QArr[0]] + ",";
        while (QArr.length !== 0 && QArr[0] <= i - k) {
            QArr.shift();
        }
        while (QArr.length !== 0 && arr[i] >= arr[QArr[QArr.length - 1]]) {
            QArr.shift();
        }
        QArr.push(i);
    }
    return str;
};
console.log(maximumSlidingWindow([12, 78, 42, 90, 87], 3));

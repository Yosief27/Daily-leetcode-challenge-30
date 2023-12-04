var subArraySum = function (arrNum, k) {
    var count = 0;
    for (var i = 0; i < arrNum.length; i++) {
        var sum = 0;
        for (var j = i; j < arrNum.length; j++) {
            sum += arrNum[j];
            if (sum === k) {
                count += 1;
                continue;
            }
        }
    }
    return count;
};
console.log(subArraySum([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3));

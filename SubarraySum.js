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
var subArraySumOptimal = function (arrNum, k) {
    var count = 0;
    var preSum = 0;
    var hashTable = { 0: 1 };
    for (var i = 0; i < arrNum.length; i++) {
        preSum += arrNum[i];
        var targetNum = preSum - k;
        if (hashTable[targetNum]) {
            count += hashTable[targetNum];
        }
        if (!hashTable[preSum]) {
            hashTable[preSum] = 0;
        }
        hashTable[preSum] += 1;
    }
    return count;
};
console.log(subArraySumOptimal([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3));

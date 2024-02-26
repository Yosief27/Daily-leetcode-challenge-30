var minWindow2 = function (s, t) {
    var sol = "";
    var right = 0;
    var left = 0;
    var minLen = Infinity;
    var minStart = 0;
    var reminder = t.length;
    var hasMap = {};
    for (var _i = 0, _a = t.split(""); _i < _a.length; _i++) {
        var c = _a[_i];
        hasMap[c] = (hasMap[c] | 0) + 1;
    }
    var sArr = s.split("");
    console.log(sArr, hasMap, reminder);
    while (right < s.length) {
        //travers from left to right and while doing so if you find the character decrease its seen value and remaining value too.
        if (hasMap[sArr[right++]]-- > 0) {
            reminder--;
        }
        // if reminder is zero meaning we have a sub solution ,the we compute the length of the substring with the current smallest substring
        // and we save both the smallest substring length and its starting character position
        while (reminder === 0) {
            if (right - left < minLen) {
                minLen = right - left;
                minStart = left;
            }
            // next we move the left pointer check for the available characters if we find so increase both the remaining and left value 
            if (hasMap[sArr[left++]]++ === 0) {
                reminder++;
            }
        }
    }
     sol = minLen === Infinity ? "Nothing" : s.substr(minStart, minLen);
    return sol
};
console.log(minWindow2("ABCFDEABQDON", "ABD"));

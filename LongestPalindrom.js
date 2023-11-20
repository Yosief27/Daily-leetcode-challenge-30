// longest palindrome in a given string
var longestPalindrom = function (s) {
    var currentLongest = [0, 1];
    for (var i = 0; i < s.length; i++) {
        var odd = expandAroundChar(s, i - 1, i + 1);
        var even = expandAroundChar(s, i - 1, i);
        var longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
    }
    return s.slice(currentLongest[0], currentLongest[1]);
};
var expandAroundChar = function (s, leftIdx, rightIdx) {
    while (leftIdx >= 0 && rightIdx < s.length) {
        if (s[leftIdx] !== s[rightIdx])
            break;
        leftIdx--;
        rightIdx++;
    }
    return [leftIdx + 1, rightIdx];
};
console.log(longestPalindrom("josiraccarkisu"));

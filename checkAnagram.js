//two words are anagram if they have the same letter length and alphabets
//anagram === nagaram
// time complixity is n2
var checkAnagram = function (s, t) {
    var sArr = s.split("");
    var tArr = t.split("");
    if (s.length !== t.length)
        return false;
    var _loop_1 = function (val) {
        var res = tArr.findIndex(function (s) { return s === val; });
        tArr.splice(res, 1);
    };
    for (var _i = 0, sArr_1 = sArr; _i < sArr_1.length; _i++) {
        var val = sArr_1[_i];
        _loop_1(val);
    }
    if (tArr.length === 0)
        return true;
    return false;
};
console.log(checkAnagram("rac", "car"));
var checkAnagramSort = function (s, t) {
    console.log(s.split("").sort().join(""));
    return s.split("").sort().join() === t.split("").sort().join();
};
console.log(checkAnagramSort("rac", "carr"));

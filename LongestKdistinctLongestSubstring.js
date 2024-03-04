var LongestKDistinctSubstring = function (s, k) {
    var sol = {};
    for (var i = 0; i < s.length; i++) {
        var char = s.charAt(i);
        console.log(char);
        if (sol[char] === undefined) {
            sol[char] = 0;
        }
        sol[char] = sol[char] + 1;
    }
    return sol;
};
console.log(LongestKDistinctSubstring("aaabbcc", 2));

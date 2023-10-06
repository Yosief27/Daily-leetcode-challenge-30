var stringPalindrom = function (s) {
    var arrS = s.split("");
    var palString = arrS.reduce(function (pString, ele) {
        pString = ele.concat(pString);
        return pString;
    });
    return palString !== s ? false : true;
};
console.log(stringPalindrom("carrac"));

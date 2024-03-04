var stringPalindromWithAnyTypeInput = function (s) {
    var re = /[\W_]/g; // [^A-Za-z0-9];
    var arrS = s.toLowerCase().replace(re, "").split("");
    console.log(arrS);
    var palString = arrS.reduce(function (pString, ele) {
        // pString=ele.concat(pString);
        pString.unshift(ele);
        return pString;
    }, []);
    console.log(palString);
    return palString.join("") !== arrS.join("") ? false : true;
};
console.log(stringPalindromWithAnyTypeInput("A man, a plan, a canal. Panama"));

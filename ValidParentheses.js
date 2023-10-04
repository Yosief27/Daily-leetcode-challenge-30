//Given a string s containing characters "[","{" or "(" determine if the input string have valued combination of characters
function validParentheses(s) {
    var arrString = s.split("");
    var validPar = {
        "{": "}",
        "[": "]",
        "(": ")",
    };
    var isValid = true;
    var arrClosed = [];
    arrString.every(function (val, i, arr) {
        if (validPar[val]) {
            arrClosed.push(validPar[val]);
        }
        else {
            if (val != arrClosed.pop()) {
                isValid = false;
                return isValid;
            }
        }
        return isValid;
    });
    return isValid && arrClosed.length === 0;
}
console.log(validParentheses("{(()}[]"));
//more to test
//function test():void{
//const arr:number[]=[1,2,3]
//arr.forEach(())
//}

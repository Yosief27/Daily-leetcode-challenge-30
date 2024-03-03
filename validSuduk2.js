var validSuduk2 = function (boardArr) {
    var sol = null;
    var rowSol = [];
    var colSol = [];
    var insideBox = [];
    for (var i = 0; i < boardArr.length; i++) {
        for (var j = 0; j < boardArr.length; j++) {
            var value = boardArr[i][j];
            if (value !== ".") {
                var boxIndex = Math.floor(j / 3) * 3 + Math.floor(i / 3);
                if (rowSol["".concat(i, "value").concat(value)] || colSol["".concat(j, "value").concat(value)] || insideBox["".concat(boxIndex, "value").concat(value)]) {
                    return sol = false;
                }
                rowSol["".concat(i, "value").concat(value)] = true;
                colSol["".concat(j, "value").concat(value)] = true;
                insideBox["".concat(boxIndex, "value").concat(value)] = true;
            }
        }
    }
    return sol = true;
};
var newBoard2 = [["5", "6", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
console.log(validSuduk2(newBoard2));

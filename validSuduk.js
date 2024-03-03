var evenNumbers = new Set([2, 4, 6, 8, 10, 12]);
var validSuduk = function (board) {
    var row = [];
    var column = [];
    var insideBox = [];
    for (var i = 0; i < board.length; i++) {
        row.push(new Set());
        column.push(new Set());
        insideBox.push(new Set());
    }
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            var cell = board[i][j];
            if (cell === ".")
                continue;
            var boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            if (row[i].has(cell) || column[j].has(cell) || insideBox[boxNumber].has(cell))
                return false;
            row[i].add(cell);
            column[j].add(cell);
            insideBox[boxNumber].add(cell);
        }
    }
    return true;
};
var newBoard = [["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
console.log(validSuduk(newBoard));

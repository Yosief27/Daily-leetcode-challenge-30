var sudukoSolver = function (board) {
    var solBoard = [];
    var emptyColl = [];
    var Empty = ".";
    var possibleNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            if (board[i][j] === Empty) {
                emptyColl.push({ row: i, col: j });
            }
        }
    }
    function recursive(index) {
        //base case
        if (index >= emptyColl.length) {
            return true;
        }
        //else the recursive call
        var _a = emptyColl[index], row = _a.row, col = _a.col;
        for (var x = 0; x < possibleNumber.length; x++) {
            if (isValid(possibleNumber[x], row, col, board)) {
                board[row][col] = possibleNumber[x];
                if (recursive(index + 1)) {
                    return true;
                }
                else {
                    //back track if not true 
                    board[row][col] = Empty;
                }
            }
        }
    }
    recursive(0);
    return board;
};
function isValid(num, row, col, board) {
    var rowDiff = Math.floor(row / 3) * 3;
    var colDiff = Math.floor(col / 3) * 3;
    for (var i = 0; i < board.length; i++) {
        if (board[row][i] === num)
            return false;
        if (board[i][col] === num)
            return false;
        // trick to check subbox(row change every 3, col change every 3)
        // allowing us to check box without extra loop
        if (board[rowDiff + Math.floor(i / 3)][colDiff + i % 3] === num) {
            return false;
        }
    }
    return true;
}
var newBoard3 = [["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
console.log(sudukoSolver(newBoard3));

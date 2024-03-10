type boardT= 
    string[]
type emptyType={
    row:number,
    col:number
}
const sudukoSolver=(board:boardT[]):boardT[]=>{
    let solBoard:boardT[]=[];
    let emptyColl:emptyType[]=[];
    let Empty=".";
    let possibleNumber=["1","2","3","4","5","6","7","8","9"];
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board.length;j++){
            if(board[i][j]===Empty){
            emptyColl.push({row:i,col:j});
            }

        }
    }
    function recursive(index:number){
        //base case
        if(index>=emptyColl.length){
            return true;
        }
        //else the recursive call
        const {row ,col}=emptyColl[index];
        for(let x=0;x<possibleNumber.length;x++){
            if(isValid(possibleNumber[x],row,col,board)){
                board[row][col]=possibleNumber[x];
                if(recursive(index+1)){
                    return true;

                }else{

                    //back track if not true 
                    board[row][col]=Empty;
                }

            }
        }

    }
    recursive(0);
    return board;
}
function isValid(num:string, row:number, col:number, board:boardT[]):boolean{  
    
    let rowDiff = Math.floor(row / 3) * 3;
    let colDiff = Math.floor(col / 3) * 3;

        for(let i = 0; i < board.length; i++) {
                if(board[row][i] === num) return false;
                if(board[i][col] === num) return false;
                // trick to check subbox(row change every 3, col change every 3)
                // allowing us to check box without extra loop
                if(board[rowDiff + Math.floor(i / 3)][colDiff + i % 3] === num) {
                    return false;
                }
            }




 
    return true;
}

let newBoard3 = [["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
console.log(sudukoSolver(newBoard3));
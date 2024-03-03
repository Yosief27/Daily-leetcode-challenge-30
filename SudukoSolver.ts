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
            if(board[i][j]==="."){
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
                if(recursive(index++)){
                    return true;
                }
                //back track if not true 

                board[row][col]=Empty;
            }
        }

    }
    return board;
}
const isValid=(num:string,col:number,row:number,board:boardT[]):boolean=>{
    for(let i=0;i<board.length;i++){
       
            if(board[row][i]===num ||board[i][col]===num) false;
            
        }
        let boxRow=Math.floor(row/3)*3;
        let boxCol=Math.floor(col/3)*3;
        for(let i=0;i<boxRow+3;i++){
            for(let j=0;j<boxCol+3;j++){
                if(board[i][j]===num)false;


           } 
        }
        return true;
    }
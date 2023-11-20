// a valid suduko is a a function which return true if all the rows and columns of the nxn matrixes does not have repeated number and those of inner small sub matrixes have no repeated words 
type boardType=(number|string)[]
let evenNumbers = new Set<number>([2, 4, 6, 8, 10, 12])
   

const validSuduk=(board:boardType[])=>{
 
    const row: Set<number|string>[]=[];
    const column:Set<number|string>[]=[]
    const insideBox:Set<number|string>[]=[]
    for (let i=0;i<board.length;i++){
        row.push(new Set())
        column.push(new Set())
        insideBox .push(new Set())
        
    }
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            let cell=board[i][j];
            if(cell===".")continue;
            let boxNumber=3*Math.floor(i/3)+Math.floor(j/3);
            if(row[i].has(cell)||column[j].has(cell)||insideBox[boxNumber].has(cell))return false;
            row[i].add(cell);
            column[j].add(cell);
            insideBox[boxNumber].add(cell);


        }
    }
    return true
    


}
const newBoard= 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(validSuduk(newBoard));
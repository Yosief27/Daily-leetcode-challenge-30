type board=(number |string)[];
const validSuduk2=(boardArr:board[]):boolean|null=>{

    let sol:boolean|null=null;
    let rowSol:{string:boolean}[]=[];
    let colSol:{string:boolean}[]=[];
    let insideBox:{string:boolean}[]=[];
    for(let i=0;i<boardArr.length;i++){
        for(let j=0;j<boardArr.length;j++){
            let value=boardArr[i][j];
            if(value!=="."){
                let boxIndex=Math.floor(j/3)*3+ Math.floor(i/3);
                if(rowSol[`${i}value${value}`]||colSol[`${j}value${value}`]||insideBox[`${boxIndex}value${value}`]){
                    return sol=false;

                }
                rowSol[`${i}value${value}`]=true;
                colSol[`${j}value${value}`]=true;
                insideBox[`${boxIndex}value${value}`]=true;


            }

        }
    }
    return sol=true;
        
}
const newBoard2= 
[["5","6",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(validSuduk2(newBoard2));


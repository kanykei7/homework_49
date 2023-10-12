const chessBoard = (amount: number) => {
    let board: string = '';
    for(let i = 0; i < amount; i++){
        board += '\n';
        for(let k = 0; k < amount; k++){
            if (i % 2) {
                if (k % 2) {
                    board += '☺ ';
                } else {
                    board += '☻ ';
                }
            } else {
                if (k % 2) {
                    board += '☻ ';
                } else {
                    board += '☺ ';
                }
            }
        }
    }
    return board;
};

console.log(chessBoard(16));
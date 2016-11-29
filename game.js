//install bable and use babelrc for ES6!!

//construct an empty board matrix
//define rows and cols
//construct a board visualization representing spots 1-9
//console.log(board)
//console.log("Your Turn")
//use prompt to get user input for slot position
  //translate that number into corresponding row/col matrix position
  //check for collisions in that position
    //if found
      //console.log("Illegal Move!")
      //call prompt
  //check for a winning combo (reduce rows, cols and diags like in N-Queens)
    //if found
      //console.log("You Win!")
     //end game and exit
 //update board[slot]
//console.log("Your Turn")
  //repeat all above logic

const prompt = require('prompt');

const board = [row1,
               row2,
               row3]

const row1 = new Array(3);
const row2 = new Array(3);
const row3 = new Array(3);

const col1 = row1[0];
const col2 = row1[1];
const col3 = row1[2];

const boardVis = '| 1 | 2 | 3 |\n' +
                 '| 4 | 5 | 6 |\n' +
                 '| 7 | 8 | 9 |\n'

const wins = (board) => {
  //check all rows
    //are all indeces filled?
      //are all values the same?
        //win!
  //check all cols
    //repeate above logic
  //check all diagonals
    //repeat above logic
}

const takeTurn = () => {
  console.log(boardVis);
  console.log("Your Turn");
  prompt.start();
  prompt.get(['position'], (err, result) {
    //use result to update position
    //if collisions takeTurn()
    //if win, end game
  })
};

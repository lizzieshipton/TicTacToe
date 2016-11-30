//install babel and use babelrc for ES6!!
//ignore node modules!
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

var prompt = require('prompt');

var board = [row1,
             row2,
             row3]

var row1 = new Array(3);
var row2 = new Array(3);
var row3 = new Array(3);

var col1 = row1[0];
var col2 = row1[1];
var col3 = row1[2];

var boardVis = '| 1 | 2 | 3 |\n' +
               '| 4 | 5 | 6 |\n' +
               '| 7 | 8 | 9 |\n'

var placeMarker = function(input) {

}

var checkForLegality = function() {

}
var checkForWins = function(board) {
  //check all rows

    //are all indeces filled?
      //are all values the same?
        //win!
  //check all cols
    //repeate above logic
  //check all diagonals
    //repeat above logic
}

var takeTurn = () => {

  console.log(boardVis);

  setTimeout(function() {
    console.log("---Make Your Move---");
  }, 1000);

  prompt.start();

  prompt.get(['marker', 'position'], function(err, result) {
    if(result.marker === 'X') {
      placeMarker('X', result.position);
    } else if(result.marker === 'O'){
      placeMarker('O', result.position);
    } else {
      console.log("Invalid Letter! Please enter \'X\' or \'O\'")
    }
  })

};
takeTurn()

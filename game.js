//construct an empty board object
//construct a board visualization representing spots 1-9
//construct an array of winning combo arrays
//console.log(board)
//console.log("Your Turn")
//use prompt to get user input for slot position
  //translate that number into corresponding board object position
  //check for collisions in that position
    //if found
      //console.log("Illegal Move!")
      //call prompt
  //check for a winning combo (match combo array to current state)
    //if found
      //console.log("You Win!")
     //end game and exit
 //update board object
//update board visualization
//call prompt

var prompt = require('prompt');

var board = {
  '1':'',
  '2':'',
  '3':'',
  '4':'',
  '5':'',
  '6':'',
  '7':'',
  '8':'',
  '9':''
}

var boardVis = '| 1 | 2 | 3 |\n' +
               '| 4 | 5 | 6 |\n' +
               '| 7 | 8 | 9 |\n'

var placeLetter = function(letter, position) {

   for(var square in board) {
    if(square === position && board[square] === '') {
      if(letter = 'X') {
        board[square] = 'X';
      } else {
        board[square] = 'Y'
      }
    } else {
      console.log("Invalid Placement! Please select an empty square from 1-9");
      takeTurn();
    }
  }

  checkForWins(board);
  updateBoardState(boardVis);
  takeTurn();
};

var checkForWins = function(board) {
  //iterate over board object
  //if current state matches any winning combinations
    //console.log("You Win!")
    //end game
};

var updateBoardState(newBoard) {
  //iterate over board keys
  //update the boardVis with the all new letter values using regex.replace
};

var takeTurn = function() {

  console.log(boardVis);

  setTimeout(function() {
    console.log("---Make Your Move---");
  }, 1000);

  setTimeout(function() {
    prompt.start();

    prompt.get(['letter', 'position'], function(err, result) {
      if(result.marker === 'X' || result.maker === 'O') {
        placeLetter(result.marker, result.position);
      } else {
        console.log("Invalid Letter! Please enter X or O")
        takeTurn();
      }
    })
  }, 2000);

};

takeTurn()
//
// [row1,
//              row2,
//              row3]
//
// var row1 = new Array(3);
// var row2 = new Array(3);
// var row3 = new Array(3);
//
// var col1 = row1[0];
// var col2 = row1[1];
// var col3 = row1[2];

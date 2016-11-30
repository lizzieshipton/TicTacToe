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

//===NODE CLI===//
var prompt = require('prompt');


//===GAME SETUP===//
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

var winningCombos = [
  ['123'],
  ['456'],
  ['789'],
  ['147'],
  ['258'],
  ['369'],
  ['159'],
  ['357']
];
//==============================================//


//=================GAMEPLAY FUNCTIONS===============//
var placeLetter = function(letter, position) {
   for(var square in board) {
    if(square === position && board[square] === '') {
      if(letter === 'X') {
        board[square] = 'X';
      } else {
        board[square] = 'O'
      }
    }
  }
  checkForWins(board);
  updateBoardState(boardVis);
  takeTurn();
};

var checkForWins = function(newBoard) {
  var compareXCombos = '';
  var compareYCombos = '';
  for(var square in newBoard) {
      if(newBoard[square] === 'X') {
        compareXCombos += square;
      } else if(newBoard[square] === 'Y') {
        compareYCombos += square;
      }
  }
  for(var combo of winningCombos) {
    if( (combo[0] === compareYCombos || combo[0] === compareYCombos.reverse) ||
        (combo[0] === compareXCombos || combo[0] === compareXCombos.reverse) {
      console.log("YOU WIN!!!");
    }
  }
};

var updateBoardState = function(newBoardVis) {
  for(var square in board) {
    var reg = new RegExp(square, 'g')
    if(board[square] === 'X') {
      boardVis = newBoardVis.replace(reg, 'X')
    } else if(board[square] === 'O') {
      boardVis = newBoardVis.replace(reg, 'O')
    }
  }
};

var takeTurn = function() {
  console.log(boardVis);
  setTimeout(function() {
    console.log("---Make Your Move---");
  }, 750);
  setTimeout(function() {
    prompt.start();
    prompt.get(['letter', 'position'], function(err, result) {
      if(err) {
        return err;
      }
      if(result.letter === 'X' || result.letter === 'O') {
        placeLetter(result.letter, result.position);
      } else {
        console.log("Invalid Letter! Please enter X or O")
        takeTurn();
      }
    })
  }, 1500);
};
//======================================================================//


//====START GAME===//
takeTurn()
//===============//

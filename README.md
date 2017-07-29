# Tic Tac Toe in Angular2 with AI

[CHECK DEMO HERE](https://tictactoe-7a3c9.firebaseapp.com/)

I created this game to learn Angular2 fundamentals

# Features

  - Play againt AI bot
  - Designed using Single data store principles.

# Game Elements
  - Player X - You
  - Player O - AI Bot
  - Block - Total 9 blocks, each block having structure { row, col, value }.
  - Winning Sequence - Total 8 winning sequences possible, each sequence have structure { {row,col}, {row,col}, {row,col} }
  - Sequence Heuristic - This value denotes how many positions in a winning sequence is having a given value ('X','O'). Four possible value 0, 1, 2, 3. Used to decide making next best move or to check if a player won.

# AI Logic
  - After a move is made by You (X) three things are done
    -- check if Winning move is possible for Bot (Y)   
    > For all avaiable positions, check heuristic of winning sequences.
    > Heuristic of 3 denotes it is a winning move.

    -- else check if Opponent can win in next move, if yes stop him
    > For all avaialble positions, as a opponent player (X) check           heuristic of winning sequences, if some postion result in heuristic 3 select a posotion among them, move Bot (Y) to this postion this will stop opponent  from winning.
    
    -- else make one of the best move avaialable
    >For all avaialble positions, check heuristic of winning sequences.
sort positions based on heuristc and pick one of the top heuristic move.




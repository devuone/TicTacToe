import { Component , OnInit} from '@angular/core';
import { BlockDataService } from './shared/blockData.service';
import { HeuristicService } from './shared/heuristic.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [ BlockDataService, HeuristicService ]
})
export class AppComponent implements OnInit{
  blocks = [];
  player = 'X';
  won = false;
  gameEnd = false;
  
  constructor(private blockDataService: BlockDataService,private heuristicService: HeuristicService) { }
  
  getBlocksData(): void {
    this.blockDataService.getBlocksData().then(blocks => this.blocks = blocks);
  };
  
  setBlockData(row, col, value){
    this.blockDataService.setBlockData(row, col, value);
  };
  
  togglePlayer(){
    this.player==='X'?this.player='O':this.player='X';
  };
  
  moveBot(move){
    //block opponent winning move
    this.setBlockData(move.row, move.col, this.player);
    this.won = this.heuristicService.checkPlayerWon(this.player);
    !this.won? this.togglePlayer() : null;
  };
  
  isWinningMovePossible(){
    //console.log("isWinningMovePossible");
    let bestMove = this.heuristicService.getBestMove(this.player);
    if(bestMove.huristic===3){
    this.moveBot(bestMove.move);
    return true;
    }
  };
  
  stopOpponentWiningMove(){
    //console.log("stopOpponentWiningMove");
    this.togglePlayer();//switch to opponent
    let bestMove = this.heuristicService.getBestMove(this.player);
    this.togglePlayer();//switch to current player
    if(bestMove.huristic===3){
       this.moveBot(bestMove.move);
       return true;
    }
  };
  
  moveBotToBestPosition(){
     //console.log("moveBotToBestPosition");
     let bestMove = this.heuristicService.getBestMove(this.player);
     this.moveBot(bestMove.move);
  };
  
  onBlockClick(block){
  let huristic = -1;  
  if(this.won===false){
   if(block.value==="") {
    this.setBlockData(block.row, block.col, this.player);
    this.won = this.heuristicService.checkPlayerWon(this.player);
    this.gameEnd = this.blockDataService.getAvailableMoves().length == 0;
   }
   
      if(!this.won && !this.gameEnd)
      {
        this.togglePlayer();
        this.isWinningMovePossible() ? null : this.stopOpponentWiningMove() ? null : this.moveBotToBestPosition() ;
      }
      }
  };
  
  resetGame(){
    this.player = 'X';
    this.won = false;
    this.gameEnd = false;
    this.blocks.forEach((block)=>{
     this.blockDataService.setBlockData(block.row, block.col, ""); 
    });
  };
  
   ngOnInit(): void {
    this.getBlocksData();
  };
}

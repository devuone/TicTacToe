import { Injectable } from '@angular/core';
import { BLOCKS_DATA, WINNING_SEQUENCES } from './data-store';
import { Block } from '../block/block';
import { BlockDataService } from './blockData.service';

@Injectable()
export class HeuristicService {
  constructor(private blockDataService : BlockDataService) { }
  
  checkPlayerWon(player){
    let won = false;
    WINNING_SEQUENCES.forEach((sequence,index)=>{
      let huristic = this.getSequenceHuristic(sequence,player);
      if(huristic===3)
      won = true;
     });
  return won;
  };
  
  getSequenceHuristic(seq,player){
    let huristic = 0;
    seq.forEach((posn)=>{
      let value = this.blockDataService.getBlockValue(posn.row,posn.col);
      if(value === player)
        huristic = huristic + 1; 
    });
    return huristic;
  };
  
  getBestMove(player){
    let moveHuristicArr = this.getHeuristicData(player);
    let maxHristic = 0;
    let randomSeqIndex = 0;
    moveHuristicArr.sort((a,b)=>{
         return b.seqHuristic -  a.seqHuristic;
       });
       maxHristic = moveHuristicArr[0].seqHuristic;
       moveHuristicArr = moveHuristicArr.filter(function(o){
         return o.seqHuristic == maxHristic;
       });
       
       randomSeqIndex = Math.floor(Math.random() * (moveHuristicArr.length - 1));
    return {"move":moveHuristicArr[randomSeqIndex].move,"huristic":moveHuristicArr[randomSeqIndex].seqHuristic};
  };
  
  getHeuristicData(player){
    let movesArr = this.blockDataService.getAvailableMoves();
    let moveHuristicArr = [];
    let maxHristic = 0;
    let randomSeqIndex = 0;
     movesArr.forEach((block)=>{
       let seqHuristicArr = [];
       this.blockDataService.setBlockData(block.row, block.col, player);
        WINNING_SEQUENCES.forEach((sequence,index)=>{
          let huristic = this.getSequenceHuristic(sequence,player);
          seqHuristicArr.push({"seqIndex":index,"huristic":huristic});
          seqHuristicArr.sort((a,b)=>{
            return b.huristic - a.huristic;
          });
          });
       this.blockDataService.setBlockData(block.row, block.col, "");
       maxHristic = seqHuristicArr[0].huristic;
       moveHuristicArr.push({"move":block,"seqHuristic":maxHristic});
      });
      return moveHuristicArr;
  };
  

}
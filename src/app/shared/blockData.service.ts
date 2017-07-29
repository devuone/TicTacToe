import { Injectable } from '@angular/core';
import { BLOCKS_DATA } from './data-store';
import { Block } from '../block/block';

@Injectable()
export class BlockDataService {
  
  getBlocksData(){
    return Promise.resolve(BLOCKS_DATA);
  };
  
  setBlockData(row, col, value){
    BLOCKS_DATA.forEach(function(block){
      if(block.row === row && block.col === col){
        block.value = value;
      }
    });
  };
  
  getBlockValue(row,col){
    let index = this.calcArrayIndex(row,col);
    return BLOCKS_DATA[index].value;
  };
  
  calcArrayIndex(row,col){
    let index = -1;
    row === 1? index = col-row : row === 2? index = row + col : index = row + col + 2;
    return index;
  };
  
  getAvailableMoves(){
   let movesArr = [];  
   BLOCKS_DATA.forEach(function(block){
     if(block.value === "")
     movesArr.push(block);
   });
   return movesArr;
  };
  
}
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Block } from './block';

@Component({
  selector: 'block',
  template: `<div 
  class="blockSpan"
  (click)="handleClick()">
  {{block?.value}}
  </div>
  `
  
}) 
export class BlockComponent {
  
  @Input() block: Block;
  @Output() onBlockClick = new EventEmitter();
  
  handleClick(){
    if(this.block.value==="")
    this.onBlockClick.emit(this.block);
  }
  
} 
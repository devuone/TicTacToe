import { Component, Input } from '@angular/core';

@Component({
  selector:"playerTurn",
  template:`<br><div>
  Player {{player}} turn
  </div>
  `
})

export class PlayerTurn {
 @Input() player;
  
}
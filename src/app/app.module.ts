import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlockComponent }  from './block/block.component';
import { BlockDataService } from './shared/blockData.service';
import { HeuristicService } from './shared/heuristic.service';
import { PlayerTurn } from './player-turn/player-turn.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    BlockComponent,
    PlayerTurn
  ],
  providers: [ BlockDataService, HeuristicService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

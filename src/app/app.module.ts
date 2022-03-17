import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { KbContainerComponent } from './kb-container/kb-container.component';
import { KbCardComponent } from './kb-card/kb-card.component';

@NgModule({
  declarations: [AppComponent, KbContainerComponent, KbCardComponent],
  imports: [BrowserModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacebookIconComponent } from './facebook-icon/facebook-icon.component';
import { TwitterIconComponent } from './twitter-icon/twitter-icon.component';
import { CardsIconComponent } from './cards-icon/cards-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    FacebookIconComponent,
    TwitterIconComponent,
    CardsIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

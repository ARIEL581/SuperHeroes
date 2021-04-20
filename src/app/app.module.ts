import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
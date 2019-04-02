import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNiveaModule } from './pages/nivea/nivea.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageNiveaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

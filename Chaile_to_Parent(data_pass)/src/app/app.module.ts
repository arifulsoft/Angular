import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChaildComponent } from './chaild/chaild.component';
import { Chaild2Component } from './parent/chaild2/chaild2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChaildComponent,
    Chaild2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

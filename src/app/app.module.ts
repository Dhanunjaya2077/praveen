import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ImgComponent } from './img/img.component';
import { SldrComponent } from './sldr/sldr.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    SldrComponent
  ],
  imports: [
    BrowserModule,
    NouisliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

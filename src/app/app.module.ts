import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CheckboxIconComponent } from './checkbox-icon/checkbox-icon.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckboxIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

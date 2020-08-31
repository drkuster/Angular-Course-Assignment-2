import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputHandleComponent } from './input-handle/input-handle.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputHandleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

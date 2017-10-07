import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Flocada } from './app.component';
import { LoginComponent } from './login/login.component';
 
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    Flocada,
    LoginComponent
  ], bootstrap: [
    Flocada
  ]
})
export class AppModule {}
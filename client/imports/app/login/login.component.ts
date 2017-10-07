import { Component } from '@angular/core';
import template from './login.component.html';

@Component({
  selector: 'fl-login',
  template: template
})
export class LoginComponent {
  privVar:string = "ohayo2!"
  getVar = () =>{  return this.privVar }
  
}
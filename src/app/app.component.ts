import { Component } from '@angular/core';
import { Conta } from './conta.models';

@Component({
  selector: 'my-app',
  template: 'app/app.component.html',
})
export class AppComponent  {
  private username: string = "Teste"
  private currentUser:User = { username: "Jair Thiago", email: "jairthiagoc@gmail.com" }

  private hideEmail:boolean = true
// private getUsername():string {
//   return this.currentUser.username
//   }

  private toggle() {
    this.hideEmail = !this.hideEmail
  }
}

interface User {
  username:string,
  email:string
}

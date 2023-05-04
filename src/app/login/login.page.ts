import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario:String = "";
  senha:String = "";

  // constructor(private user:String, private pass:String) {
  //   this.usuario = user;
  //   this.senha = pass;
  //  }
  constructor() { }

  ngOnInit() {
  }

  public printa(){
    console.log("aquii");
    console.log("usuario", this.usuario);
    console.log("senha", this.senha);
  }

}

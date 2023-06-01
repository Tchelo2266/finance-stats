import { Component, OnInit } from '@angular/core';
import { Credenciais } from '../models/credenciais';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credenciais: Credenciais = {email: "", senha: ""};
  email:String = "";
  senha:String = "";
  invalidLogin:boolean = false;

  // constructor(private user:String, private pass:String) {
  //   this.usuario = user;
  //   this.senha = pass;
  //  }
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public login(){
    this.credenciais = {email: this.email.toString(), senha: this.senha.toString()};

    this.authService.logar(this.credenciais.email, this.credenciais.senha).then((response)=>{
      console.log("AAAAAAAAAAAAAAAA", response);
      if(response){
        this.router.navigate(['/dashboard']);
      }
    }).catch((erro) => {
      console.error(erro);
      this.invalidLogin = true;
    }).finally(()=>{
      // this.invalidLogin = false;
    });

    // console.log("usuario", this.usuario);
    // console.log("senha", this.senha);
  }

}

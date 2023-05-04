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
  credenciais: Credenciais = {nomeUsuario: "", senha: ""};
  usuario:String = "";
  senha:String = "";

  // constructor(private user:String, private pass:String) {
  //   this.usuario = user;
  //   this.senha = pass;
  //  }
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public printa(){
    this.credenciais = {nomeUsuario: this.usuario.toString(), senha: this.senha.toString()};
    console.log("aquii", this.credenciais);
    let erro = "Usuário ou senha inválidos"
    this.authService.login(this.credenciais).then((response)=>{
      if(response){
        this.router.navigate(['/dashboard']);
      }
      else{
        console.error(erro);
      }
    })

    // console.log("usuario", this.usuario);
    // console.log("senha", this.senha);
  }

}

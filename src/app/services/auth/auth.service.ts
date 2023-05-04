import { Injectable } from '@angular/core';

import { Usuario } from '../../models/usuario'
import { Credenciais } from 'src/app/models/credenciais';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioCheck: Usuario = {
    id: 1,
    nome: "Marcelo",
    nomeUsuario: "Marcelo123",
    senha: "12345",
  }

  constructor() { }

  async login(credenciais: Credenciais){
    if(this.usuarioCheck.nomeUsuario === credenciais.nomeUsuario){
      if(this.usuarioCheck.senha === credenciais.senha){
        return true;
      }
      return false;
    }
    return false;
  }

}

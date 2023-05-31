import { Injectable } from '@angular/core';

import { Usuario } from '../../models/usuario'
import { Credenciais } from 'src/app/models/credenciais';
import { FirebaseService } from 'src/app/services/firebase.service';
// import { Observable } from 'rxjs';
import { Auth,  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential
}  from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth;

  usuarioCheck: Usuario = {
    id: "1",
    uid: "",
    nome: "Marcelo",
    email: "Marcelo123",
    senha: "12345",
  }

  constructor(private fireServ: FirebaseService) {
    this.auth = getAuth(this.fireServ.getApp());
  }

  // async login(credenciais: Credenciais){
  //   if(this.usuarioCheck.email === credenciais.email){
  //     if(this.usuarioCheck.senha === credenciais.senha){
  //       return true;
  //     }
  //     return false;
  //   }
  //   return false;
  // }
  public logar(email: string, senha: string) {
    return signInWithEmailAndPassword(
        this.auth, email, senha);
   }

}

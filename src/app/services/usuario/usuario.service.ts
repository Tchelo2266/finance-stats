import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { collection, doc, getDocs, getDoc, addDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { Usuario, criaUsuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private fireServ: FirebaseService) {

  }

  public async add(usuario: Usuario) {
    try {
      // @ts-ignore
      delete usuario.id;
      const docRef = await addDoc(
        collection(this.fireServ.getFirestoreDB(), 'usuarios'), { ...usuario }
      );

      return docRef;
    }
    catch (error) {
      console.log(error);
      return null;
    }

  }

}

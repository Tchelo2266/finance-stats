import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FirebaseService } from './firebase.service';
import { getFirestore, collection, doc, Firestore, getDocs, getDoc, addDoc, setDoc, deleteDoc } 
from 'firebase/firestore';
import { Movimento, create } from 'src/app/models/movimento';

@Injectable({
  providedIn: 'root'
})
export class MovimentoService {
  constructor(private fireServ: FirebaseService, private storage: Storage) { 
    // this.storage.create();
  }

  public async add(movimento: Movimento) {
    try {
      // @ts-ignore
      delete movimento.id;

      const docRef = await addDoc(
        collection(this.fireServ.getFirestoreDB(), 'movimento'),
        {
          ...movimento
        }
      );

      return docRef;
    } catch (error) {
      console.log(error);
      
      return null;
    }
  }

  public async carregar(): Promise<Movimento[]> {
    let listaMovimentos: Movimento[] = [];

    // await this.storage.forEach(movimento => {
    //   listaMovimentos.push(movimento);
    // })

    return listaMovimentos;
  }
}

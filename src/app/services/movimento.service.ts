import { Injectable } from '@angular/core';

import { FirebaseService } from './firebase.service';
import { getFirestore, collection, doc, Firestore, getDocs, getDoc, addDoc, setDoc, deleteDoc } 
from 'firebase/firestore';
import { Movimento, create } from 'src/app/models/movimento';

@Injectable({
  providedIn: 'root'
})
export class MovimentoService {
  constructor(private fireServ: FirebaseService) { }

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
}

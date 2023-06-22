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
    this.storage.create();
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
    const movimentos = await getDocs(collection(this.fireServ.getFirestoreDB(), 'movimento'));
    movimentos.forEach(element => {
      let mov = element.data();
      
      console.log("mov",mov);
      console.log("mov",mov['valor']);

      let dataFormatada = new Date(mov['data']['seconds']).toString();
      listaMovimentos.push({
        descricao: mov['descricao'],
        data: dataFormatada,
        // data: mov['data'],
        id: element.id,
        valor: mov['valor'],
        tipoMovimento: mov['tipoMovimento'] == 1 ? "Pagar" : "Receber"
      });
      // console.log("movimentos",element.data());
    });
    // await this.storage.forEach(movimento => {
    //   listaMovimentos.push(movimento);
    // })
    // console.log("docRefdocRef",listaMovimentos);

    return listaMovimentos;
  }
}

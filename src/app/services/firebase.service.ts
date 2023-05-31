import { Injectable } from "@angular/core";

// FirebaseApp: Contém as informações de inicialização de uma coleção de serviços.
// initializeApp: Cria e inicializa uma instância do FirebaseApp.
import { FirebaseApp, initializeApp } from "firebase/app";
// Firestore: Contém as informações de inicialização de uma coleção de serviços ao banco de dados Firestore.
/* getFirestore: Retorna a instância padrão existente do Firestore que está associada ao FirebaseApp padrão.
*  Se não existir nenhuma instância, inicializa uma nova instância com as configurações padrão
*/
import { Firestore, getFirestore } from 'firebase/firestore';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService{

  private app: FirebaseApp;
  private firestoreDB: Firestore;

  constructor() {
    this.app = initializeApp(environment.firebaseConfig);
    this.firestoreDB = getFirestore( this.app );
  }

  public getApp(): FirebaseApp{
    return this.app;
  }

  public getFirestoreDB() {
    return this.firestoreDB;
  }

}

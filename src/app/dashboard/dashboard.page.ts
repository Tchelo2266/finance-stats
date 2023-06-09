import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import Chart from 'chart.js/auto';
import { FirebaseService } from '../services/firebase.service';
// import firebase from 'firebase/app';
import 'firebase/database';
import { Movimento } from '../models/movimento';

import { getFirestore, collection, doc, Firestore,
  getDocs, getDoc, addDoc, setDoc, deleteDoc }
from 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class DashboardPage implements OnInit {
  usuario:String = "";
  pieChart: any = "";
  valorReceita = 'R$5000,00';
  valorDespesa = 'R$3000,00';
  colunaSalario = 'R$4500,00';
  colunaRendimentos = 'R$500,00';
  colunaInternet = 'R$-200,00';
  colunaGastos = 'R$-2800,00';
  colunaTotal = 'R$-2800,00';

  constructor(private fireServ: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.getFirebaseData();
    this.createPieChart();
  }

  async getFirebaseData() {
    const movimentosCol = collection(
      this.fireServ.getFirestoreDB(),
      'movimentos'
    );
    const movimentoSnapshot = await getDocs(
      movimentosCol
    );
    // const movimentosList: Movimento[] = movimentoSnapshot.docs.map(
    //   function (doc) {
    //     const item = { ...doc.data()};
    //     return {
    //       valor: item['valor'],
    //       tipoMovimento: item['tipoMovimento'],
    //       descricao: item['descricao'],
    //       dataMovimento: item['dataMovimento'],
    //       usuario_id: item['usuario_id'],

    //     }
    //   }
    // );
    // console.log("movimentosList movimentosList movimentosList",movimentosList);

    // return movimentosList;
  }

  public createPieChart() {
    const data = {
      labels: ['Comida', 'Contas', 'Carro', 'Estudo', 'Diversão', 'Casa'],
      datasets: [{
        label: 'Gasto:',
        data: [12, 19, 13, 35, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    };

    this.pieChart = new Chart('pieChart', {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: ''
          }
        }
      }
    });
  }

  public verMais() {
    this.router.navigate(['/movimento']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'movimento',
  templateUrl: './movimento.page.html',
  styleUrls: ['./movimento.page.scss'],
})
export class MovimentoPage implements OnInit {
  itens: any = [
    {descricao: "Aluguel", tipoMovimento: "pagar", valor: "350.00"},
    {descricao: "Luz", tipoMovimento: "pagar", valor: "100.00"},
    {descricao: "Água", tipoMovimento: "pagar", valor: "120.00"},
    {descricao: "Mercado", tipoMovimento: "pagar", valor: "200.00"},
    {descricao: "Uber", tipoMovimento: "receber", valor: "50.00"},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public cadastro() {
    this.router.navigate(['/cadastro-movimento']);
  }
}

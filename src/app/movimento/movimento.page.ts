import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovimentoService } from "../services/movimento.service";
import { Movimento } from "../models/movimento";

@Component({
  selector: 'movimento',
  templateUrl: './movimento.page.html',
  styleUrls: ['./movimento.page.scss'],
})
export class MovimentoPage implements OnInit {
  public itens: Array<Movimento> = [];
  // itens: any = [
  //   { descricao: "Aluguel", tipoMovimento: "pagar", valor: "350.00", data: new Date },
  //   { descricao: "Luz", tipoMovimento: "pagar", valor: "100.00", data: new Date },
  //   { descricao: "Água", tipoMovimento: "pagar", valor: "120.00", data: new Date },
  //   { descricao: "Mercado", tipoMovimento: "pagar", valor: "200.00", data: new Date },
  //   { descricao: "Uber", tipoMovimento: "receber", valor: "50.00", data: new Date },
  // ];

  constructor(private router: Router, private movimentoService: MovimentoService) { }

  ngOnInit() {
    this.listar();
  }

  public cadastro() {
    this.router.navigate(['/cadastro-movimento']);
  }

  public listar() {
    this.movimentoService.carregar().then((movimento: Movimento[]) => {
      this.itens = movimento.map((item)=>{
        const data = item.data.toString();
        // @ts-ignore
        delete item.data;
        return {
          ...item,
          data
        }
      });
    })
    console.log(this.itens);
  }
}

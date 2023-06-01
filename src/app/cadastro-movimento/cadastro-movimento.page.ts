import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovimentoService } from 'src/app/services/movimento.service';
import { Movimento, create } from '../models/movimento';

@Component({
  selector: 'app-cadastro-movimento',
  templateUrl: './cadastro-movimento.page.html',
  styleUrls: ['./cadastro-movimento.page.scss'],
})
export class CadastroMovimentoPage implements OnInit {
  public movimento: Movimento = create();

  constructor(private movimentoServ: MovimentoService, private router: Router) { }

  ngOnInit() {
  }

  public salvar() {
    this.movimentoServ.add(this.movimento).then((movimento)=>{
      console.log("Movimento", movimento);

      this.router.navigate(['/movimento']);
    });
  }
}

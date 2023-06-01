import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroMovimentoPageRoutingModule } from './cadastro-movimento-routing.module';

import { CadastroMovimentoPage } from './cadastro-movimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroMovimentoPageRoutingModule
  ],
  declarations: [CadastroMovimentoPage]
})
export class CadastroMovimentoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaTarefaPageRoutingModule } from './edita-tarefa-routing.module';

import { EditaTarefaPage } from './edita-tarefa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaTarefaPageRoutingModule
  ],
  declarations: [EditaTarefaPage]
})
export class EditaTarefaPageModule {}

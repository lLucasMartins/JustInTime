import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaTarefaPage } from './edita-tarefa.page';

const routes: Routes = [
  {
    path: '',
    component: EditaTarefaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaTarefaPageRoutingModule {}

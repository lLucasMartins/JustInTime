import { Component } from '@angular/core';

import { StorageService, TarefaLista } from '../services/storage.service';

import { ToastController } from '@ionic/angular';

import { Router, NavigationExtras  } from '@angular/router';

@Component({

  selector: 'app-home',

  templateUrl: 'home.page.html',

  styleUrls: ['home.page.scss'],

})

export class HomePage {

  tarefas: TarefaLista[];

  constructor(

   private router: Router, 

   private storageService: StorageService, private toast: ToastController) { }

 // método ionWiewDidEnter carrega todos os registros do storage quando o usuário entra na página

 //saiba mais sobre o ciclo de vida das páginas no link: https://ionicframework.com/docs/angular/lifecycle

  ionViewDidEnter() {

    this.storageService.getAll()

      .then((result) => {

        this.tarefas = result;

      });

  }

 // chama a página edita-tarefa passando um objeto tarefa como parâmetro

  editaTarefa(item: TarefaLista) {

    let navExtras =  {

      state: {

        valorParaEnviar: { key: item.key, tarefa: item.tarefa }

      }

    };

    this.router.navigate(['edita-tarefa'], navExtras);

  }

// chama o método remove do Storage service passando a chave para ser excluída

  removeTarefa(item: TarefaLista) {

    this.storageService.remove(item.key)

      .then(async () => {

        // Removendo do array de items

        var index = this.tarefas.indexOf(item);

        this.tarefas.splice(index, 1);

        (await this.toast.create({ message: 'Tarefa removida.', duration: 3000, position: 'bottom' })).present();

      })

  }

}
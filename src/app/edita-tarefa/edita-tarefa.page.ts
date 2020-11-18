import { Component, OnInit } from '@angular/core';

import { StorageService, Tarefa } from '../services/storage.service';

import { NavController,  ToastController } from '@ionic/angular';

import { ActivatedRoute, Router } from '@angular/router';

@Component({

  selector: 'app-edita-tarefa',

  templateUrl: './edita-tarefa.page.html',

  styleUrls: ['./edita-tarefa.page.scss'],

})

export class EditaTarefaPage implements OnInit {

  model: Tarefa;

  key: string;

  parametros: any;

 

  constructor(public navCtrl: NavController, 

     private storageService: StorageService, 

     private route: ActivatedRoute,

     private router: Router,

     private toast: ToastController) { }

// método ngOnInit carregará o formulário vazio ou com os dados para alteração

// se existir um objeto na url, carrega com os dados do objeto senão carrega o formulário para inclusão

 

     ngOnInit() {

      this.route.queryParams.subscribe(params => {

        let getNav = this.router.getCurrentNavigation();

        if (getNav.extras.state) {

          this.key = getNav.extras.state.valorParaEnviar.key;

          this.model = getNav.extras.state.valorParaEnviar.tarefa;

        } else {

          this.model = new Tarefa(); 

        }

      });

       

    }

 // Chama o método salvaTarefa exibindo um toast se houver erro ou sucesso.

 // https://ionicframework.com/docs/native/toast        ;

  save() {

    this.salvaTarefa()

      .then(async () => {

        (await this.toast.create({ message: 'Tarefa salvo.', duration: 3000, position: 'bottom' })).present();

        this.navCtrl.pop();

      })

      .catch(async () => {

        (await this.toast.create({ message: 'Erro ao salvar a Tarefa.', duration: 3000, position: 'bottom' })).present();

      });

  }

 // se já existir uma key chama o método update, senão chama o método insert do Service Storage

  private salvaTarefa() {

    if (this.key) {

      return this.storageService.update(this.key, this.model);

    } else {

      return this.storageService.insert(this.model);

    }

  }

}

import { Injectable } from '@angular/core';

import { DatePipe } from '@angular/common';

import { Storage } from '@ionic/storage';

@Injectable({

  providedIn: 'root'

})

export class StorageService {

 

  constructor(private storage: Storage, private datepipe: DatePipe) { }

 //Inserção de um registro, usa o plugin datepipe para formatar a data

  public insert(tarefa: Tarefa) {

    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");

    return this.save(key, tarefa);

  }

 //Método para edição de uma tarefa, ele chamará o método save passando a chave do registro e a tarefa que será alterada

  public update(key: string, tarefa: Tarefa) {

    return this.save(key, tarefa);

  }

 //Método para setar valores na chave do storage

  private save(key: string, tarefa: Tarefa) {

    return this.storage.set(key, tarefa);

  }

 //Excluir um registro

  public remove(key: string) {

    return this.storage.remove(key);

  }

 //Selecionar todos os registros

  public getAll() {

 

    let tarefas: TarefaLista[] = [];

 

    return this.storage.forEach((value: Tarefa, key: string, iterationNumber: Number) => {

      let tarefa = new TarefaLista();

      tarefa.key = key;

      tarefa.tarefa = value;

      tarefas.push(tarefa);

    })

      .then(() => {

        return Promise.resolve(tarefas);

      })

      .catch((error) => {

        return Promise.reject(error);

      });

  }

}

 // A classe tarefa tem os atributos de uma tarefa

export class Tarefa {

  nome: string;

  local: string;

  /*data: Date;*/
  tipo: boolean;
  status: boolean;
  

}

 //A classe tarefa lista terá a chave do storage a o objeto Tarefa com todos os campos

export class TarefaLista {

  key: string;

  tarefa: Tarefa;

}
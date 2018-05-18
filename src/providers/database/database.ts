import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class DatabaseProvider {
 
  constructor(private storage: Storage) { }
 
  public insert(usuario: Usuario) {
    let key = usuario.email;
    return this.save(key, usuario);
  }
 
  public update(key: string, usuario: Usuario) {
    return this.save(key, usuario);
  }
 
  private save(key: string, usuario: Usuario) {
    return this.storage.set(key, usuario);
  }
 
  public remove(key: string) {
    return this.storage.remove(key);
  }
 
  public getAll() {
 
    let usuarios: UsuarioList[] = [];
 
    return this.storage.forEach((value: Usuario, key: string, iterationNumber: Number) => {
      let usuario = new UsuarioList();
      usuario.key = key;
      usuario.nome = value;
      usuarios.push(usuario);
    })
      .then(() => {
        return Promise.resolve(usuarios);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

 
export class Usuario {
  name: string;
  email: any;
  password: any;
  passwordc: any;
}

export class UsuarioList {
  key: string;
  nome: Usuario;
  password: any;
}

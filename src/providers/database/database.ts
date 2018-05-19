import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';


@Injectable()

export class DatabaseProvider {

 apiUrl:string = 'http://secretariavirtual.herokuapp.com/api/';
 data:any;

  constructor(private storage: Storage, public http:Http) { }

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

  //API REQUEST
  // getData(){
  //   var headers = new Headers();
  //   headers.append('Accept', 'application/json ');
  //   this.http.get('http://secretariavirtual.herokuapp.com/api/pacientes',{"Headers": headers})
  //   .subscribe (data => {
  //     this.data = data;
  //   }
  // }
  //

  getAll(){
    if (this.data) {
      return Promise.resolve(this.data);
}
    return new Promise(resolve => {

      this.http.get(this.apiUrl+'pacientes')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
        });
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

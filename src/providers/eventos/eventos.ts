import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class EventosProvider {

  private API_URL = 'http://www.gmdlogistica.com.br:8085/bicudosapi/'

  constructor(public http: HttpClient) {  }

  getEventos(iduser: number) {
    return new Promise((resolve, reject) => {
 
      let url = this.API_URL + 'evento/'+ iduser;
 
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  joinEvento(idEvento: number, iduser: number) {
    return new Promise((resolve, reject) => {
       
      this.http.post(this.API_URL + 'evento/' + idEvento + '/' + iduser, {})
        .subscribe(data => {
          resolve(data);
        },
        (error) => {
          reject(error.json());
        });
    });
  }

}

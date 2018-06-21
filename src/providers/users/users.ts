import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
 
@Injectable()
export class UsersProvider {
  private API_URL = 'http://www.gmdlogistica.com.br:8085/bicudosapi/'
 
  constructor(public http: HttpClient) { }
 
  createAccount(data) {
    return new Promise((resolve, reject) => {
       
      this.http.post(this.API_URL + 'user', data)
        .subscribe(data => {
          resolve(data);
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  login(data) {
    return new Promise((resolve, reject) => {
      //JSON.stringify(data)
      this.http.patch(this.API_URL + 'user', data)
        .subscribe(data => {
          resolve(data);
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  getAll(page: number) {
    return new Promise((resolve, reject) => {
 
      let url = this.API_URL + 'user';
 
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  get(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + id;
 
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  insert(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/';
 
      this.http.post(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  update(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + user.id;
      let data = {
        "first_name": user.first_name,
        "last_name": user.last_name
      }
 
      this.http.put(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  remove(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + id;
 
      this.http.delete(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}
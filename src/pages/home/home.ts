import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { UsersProvider } from './../../providers/users/users';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  model: User;
    
  constructor(public navCtrl: NavController, private toast: ToastController, private userProvider: UsersProvider) {
    this.model = new User();
    this.model.id = 0;
    this.model.email = '';
    this.model.password = '';
    this.model.chave_push = '';
  }

  openCreateAccount() {
    if (this.model.email == ''){
      this.toast.create({ message: 'Favor informar o e-mail ', position: 'botton', duration: 3000 }).present();
    } else if (this.model.password == ''){
      this.toast.create({ message: 'Favor informor a senha ', position: 'botton', duration: 3000 }).present();
    } else {
      this.userProvider.createAccount(this.model)
      .then(data => {
        console.log(data);

        this.model = data as User;
        if (this.model.id == -1){
          this.toast.create({ message: 'e-mail já cadastrado', position: 'botton', duration: 3000 }).present();
        } else {
          this.toast.create({ message: 'Usuário cadastrado com sucesso', position: 'botton', duration: 3000 }).present();
          this.navCtrl.push('TabsPage', {iduser: this.model.id});
        }       
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao efetuar cadastro. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
    }
  }
 
  openLogin() {
    this.userProvider.login(this.model)
      .then(data => {       
        console.log(data);
        this.model = data as User;
        if (this.model.id == -2){
          this.toast.create({ message: 'Email não cadastrado', position: 'botton', duration: 3000 }).present();
        } else if (this.model.id == -1){
          this.toast.create({ message: 'Senha incorreta', position: 'botton', duration: 3000 }).present();
        } else {
          this.toast.create({ message: 'Usuário logado com sucesso.', position: 'botton', duration: 3000 }).present();
          this.navCtrl.push('TabsPage', {iduser: this.model.id});
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }
 
  openListUsers() {
    this.navCtrl.push('UserListPage');
  }

}

export class User {
  id: number;
  email: string;
  password: string;
  chave_push: string;
}

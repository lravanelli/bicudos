import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, InfiniteScroll } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { EventosProvider } from './../../providers/eventos/eventos';

/**
 * Generated class for the Tab1rootPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1root',
  templateUrl: 'tab1root.html',
})
export class Tab1rootPage {
  public iduser: number = this.navParams.data;
  eventos: any;
  
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private eventoProvider: EventosProvider) {
  }

  ionViewDidLoad() {
    this.infiniteScroll.enable(true);
    this.getAllEventos(this.iduser);
    console.log(this.iduser);
  }

   getAllEventos(iduser: number) {
    this.eventoProvider.getEventos(iduser)
      .then(data => {
        
        this.eventos = data;
 
        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.eventos.length == data) {
            this.infiniteScroll.enable(false);
          }
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os usuários. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  openEvento(evento: any) {
    this.navCtrl.push('EventoDetalhePage', { evento: evento, iduser: this.iduser });
  } 

}

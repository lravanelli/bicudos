import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EventosProvider } from './../../providers/eventos/eventos';

/**
 * Generated class for the EventoDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-evento-detalhe',
  templateUrl: 'evento-detalhe.html',
})
export class EventoDetalhePage {
  evento: any;
  iduser: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private eventoProvider: EventosProvider, private toast: ToastController) {
    this.evento = navParams.get("evento");
    this.iduser = navParams.get("iduser");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoDetalhePage');
    
  }

  join(){
    this.eventoProvider.joinEvento(this.evento.id, this.iduser)
      .then(data => {
        console.log(data);
        this.toast.create({ message: 'Join efetuado com sucesso!', position: 'botton', duration: 3000 }).present();
             
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao efetuar cadastro. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  openMap(){
    this.navCtrl.push('MapaPage');
  }

 
}

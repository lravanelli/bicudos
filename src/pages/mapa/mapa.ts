import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


declare var google;

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
 
  endereco: string;
  cep: string;
  evento: string;

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.endereco = navParams.get("endereco");
    this.cep = navParams.get("cep");
    this.evento = navParams.get("evento");
    
  }

  ionViewDidLoad() {
    this.loadMap();
  }


  loadMap(){
    let geocoder = new google.maps.Geocoder;
    var address = this.endereco;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
           
           this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() },
            zoom: 15
          });
          
          let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
          });
         
          //let content = "<h4></h4>";  
          
          
         

          //let infoWindow = new google.maps.InfoWindow({
          //  content: content
          //});
         
          //google.maps.event.addListener(marker, 'click', () => {
          //  infoWindow.open(this.map, marker);
          //});  

        } else {
        }
    });

  }


}

import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  coordinates: any="";
  lat: number= 0;
  long: number = 0;
  time:any = 0;

  constructor() {}

  async getGPS(){
    this.coordinates = await Geolocation.getCurrentPosition();
    this.long = this.coordinates.coords.longitude;
    this.lat = this.coordinates.coords.latitude;
    this.time = new Date(this.coordinates.timestamp);
  }

  async browser(){
 await Browser.open({ url: 'http://capacitorjs.com/' });
}
}

import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Profile } from '../../interfaces/Profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public profile = {} as Profile;
  constructor(public navCtrl: NavController, public modalCtrl:ModalController) {

  }
  modal(){
    let modal = this.modalCtrl.create('ModalPage');
    modal.onDidDismiss(data => {
      this.profile = data;
      console.log(data);
    });
    modal.present();
  }
}

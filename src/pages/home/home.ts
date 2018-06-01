import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { Profile } from '../../interfaces/Profile';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public profile = {} as Profile;
  constructor(public navCtrl: NavController, public modalCtrl:ModalController, public alertCtrl:AlertController, private sms:SMS) {

  }
  modal(){
    let modal = this.modalCtrl.create('ModalPage');
    modal.onDidDismiss(data => {
      if(data != null) {
        this.profile = data;
        console.log(data);
      }
    });
    modal.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        { name: 'name', placeholder: 'Name 입력' },
        { name: 'email', placeholder: 'Email 입력' },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log(data.name);
            console.log(data.email);
          }
        }
      ]
    });
    prompt.present();
  }

  sendSMS() {
    let prompt = this.alertCtrl.create({
      title: 'SMS',
      message: "메세지를 작성하여 주시기 바랍니다.",
      inputs: [ 
        {
          name: 'phone',
          placeholder: 'phone'
          },
      {
      name: 'msg',
      placeholder: 'Message Here....'
      },
      ],
      buttons: [ {
      text: '취소',
      handler: data => { console.log('취소 clicked'); }
      },{
      text: '보내기',
      handler: data => { this.sms.send
      (data.phone, data.msg);}
      }
      ]
      });
      prompt.present();
  }
}

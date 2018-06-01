import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the DatabasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'DatabasePage'})
@Component({
  selector: 'page-database',
  templateUrl: 'database.html',
})
export class DatabasePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer:EmailComposer, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatabasePage');
  }

  sendEmail() {
    let prompt = this.alertCtrl.create({
      title: '이메일',
      message: "이메일 작성",
      inputs: [
        { name: 'email', placeholder: 'Email' },
        { name: 'name', placeholder: 'Name' },
        { name: 'body', placeholder: '내용' },
      ],
      buttons: [ {
        text: '취소',
        handler: data => { console.log('취소 clicked'); }
        },{
        text: '보내기',
        handler: data => { 
          let email = {
            to: data.email,
            subject: 'To :' + data.name,
            body: data.body,
            isHtml: true
            };
            this.emailComposer.open(email);
        }
        }
      ]
    });
    prompt.present();
  }
}

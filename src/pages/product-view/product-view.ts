import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Product } from './../../interfaces/product';
import { RestProvider } from '../../providers/rest/rest';
import { ProductListPage } from '../product-list/product-list';

/**
 * Generated class for the ProductViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-view',
  templateUrl: 'product-view.html',
})
export class ProductViewPage {
  product:Product;
  constructor(public navCtrl: NavController, public navParams: NavParams, public rest:RestProvider,  private toastCtrl: ToastController) {
    this.product = new Product(this.navParams.get('product'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductViewPage');
  }

  saveProduct(product:Product){
    if (product.id){
      this.rest.updateProduct(product).subscribe((product)=>{
        this.product = product;
        this.showSuccessMessage("Product " + product.name + " updated");
        this.navCtrl.setRoot(ProductListPage);
        })
    }else{ //등록
    this.rest.createProduct(product).subscribe((product)=>{
    this.product = product;
    this.showSuccessMessage("Product "+ product.id + " - " + product.name + " created");
    this.navCtrl.setRoot(ProductListPage);
    })
    }
    }

    showSuccessMessage(message:string){
      this.toastCtrl.create({
      message: message, showCloseButton: true,
      duration:3000, position:'middle'
      }).present();
      }

      deleteProduct(productId:number){
        this.rest.deleteProductById(productId).subscribe((product)=>{
        console.log(product)
        this.showSuccessMessage("Product Id "+ productId + " has been removed!");
        this.navCtrl.setRoot(ProductListPage);
        })
        }
        
}

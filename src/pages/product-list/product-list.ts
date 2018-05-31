import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { RestProvider } from '../../providers/rest/rest';
import { Product } from './../../interfaces/product';

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
  productsObservable:Observable<Product[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private rest:RestProvider) {
  }

  ionViewDidLoad() {
    this.productsObservable = this.rest.getProducts();
  }

  navToDetail(product:Product){
    this.navCtrl.push("ProductViewPage", {"product": product});
  }

  createProduct(){
    this.navCtrl.push("ProductViewPage", {"product": {}});
    }
    
}

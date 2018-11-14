import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditarPostPage } from '../editar-post/editar-post';
import { NovoPostPage } from '../novo-post/novo-post';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  users: any;
  post: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider :RestProvider) {
    this.ListPost();
  }

  ListPost(){
    this.restProvider.getPostagem()
    .then(data=>{
      this.post = data;
      console.log(this.post);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
  
Editar(){
  this.navCtrl.push(EditarPostPage);
}

Novo(){
  this.navCtrl.push(NovoPostPage);
}


}

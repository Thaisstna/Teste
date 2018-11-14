import { Component } from '@angular/core';
import { InicioPage } from '../inicio/inicio';
import { NavController } from 'ionic-angular';
import { NovoPostPage } from '../novo-post/novo-post';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {


  constructor(public navCtrl: NavController) {
    
  }

  Logar()
  {
    this.navCtrl.push(InicioPage);
  }

  Teste(){
    this.navCtrl.push(NovoPostPage);
  }

}

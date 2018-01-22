import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// imane-2bfde
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabBarElement: any;
  splash = true;

  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }
/*
  incrementaValor(valorMaximo){
    var value = parseInt(document.getElementById('campo-quantidade').value,10);
    value = isNaN(value) ? 0 : value;
    if(value >= valorMaximo) {
        value = valorMaximo;
    }else{
        value++;
    }
    document.getElementById('campo-quantidade').value = value;
  }*/

}

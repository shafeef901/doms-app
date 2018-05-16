import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SmartAudio } from '../../providers/smart-audio/smart-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toggle: boolean;
  classVariable: string = '';

  constructor(public navCtrl: NavController, public smartAudio: SmartAudio) {
  	this.toggle = true;

  }
  
  toggleBut(){
  	this.classVariable = "button-resize";
  	this.smartAudio.play('lock');

  	this.toggle = !this.toggle;
  	setTimeout(function(){ 
        this.classVariable = "";
    }, 750);
  	
  }

}

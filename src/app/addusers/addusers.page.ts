import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import {AlertController, ToastController} from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';
import { ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.page.html',
  styleUrls: ['./addusers.page.scss'],
})
export class AddusersPage implements OnInit {
  data2: any = {};
  pet = 'puppies';
  data: any = {};
  baseurl: any;
  
  constructor(public modalController: ModalController,private httpa: HTTP, private http: HttpClient, public loadingController: LoadingController,public rest: RestService,private storage: Storage) { 
    this.baseurl = rest.apiURLs;
    console.log(this.baseurl)
  }
  ngOnInit() {
  }
  
  async add() {
    console.log(this.data);
    const loading = await this.loadingController.create({
      message: ' Please Wait we are checking your Credentials',
      duration: 2000
    });
    await loading.present();
    this.httpa.setDataSerializer('json');
    this.httpa.post(this.baseurl + 'addmember.php', { email: this.data.email, name: this.data.name, phone: this.data.phone, city: this.data.city}, {'Content-Type': 'application/json'})
    .then(response => {
      Swal.fire( 'Member Added Sucessfully');
     console.log(response.data);
     this.data2 = JSON.parse(response.data);

    });
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }
}

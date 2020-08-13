import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import {AlertController, ToastController} from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';
import { ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  data2: any = {};
  pet = 'puppies';
  data: any = {};
  baseurl: any;
  
  constructor(private httpa: HTTP, private http: HttpClient, public loadingController: LoadingController,public rest: RestService,private storage: Storage) { 

    this.baseurl = rest.apiURL;
    console.log(this.baseurl);
  }

  ngOnInit() {
  }

  async login() {

    const loading = await this.loadingController.create({
      message: ' Please Wait we are checking your Credentials',
      duration: 2000
    });
    await loading.present();
    this.httpa.setDataSerializer('json');
    // tslint:disable-next-line:max-line-length
    this.httpa.post(this.baseurl + 'login', { email: this.data.email, password: this.data.passwords}, {'Content-Type': 'application/json'})
    .then(response => {
     console.log(response.data);
     this.data2 = JSON.parse(response.data);
     console.log(this.data2.token);
     if ( this.data2 ) {
      this.storage.set('token', this.data2.token );
    //  Swal.fire("Thank You for using FIMS");

     Swal.fire('Thank You', 'Thank You for using reqres!', 'success');

     }
    });
  
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { AddusersPage } from '../addusers/addusers.page'
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rest.service';
import { async } from 'rxjs/internal/scheduler/async';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-assesment',
  templateUrl: './assesment.page.html',
  styleUrls: ['./assesment.page.scss'],
})
export class AssesmentPage implements OnInit {
rows : any;
  baseurl: any;
  data2: any;
  data: any = {};
  limit:any;
  constructor(public modalController: ModalController,private httpa: HTTP, private http: HttpClient, public loadingController: LoadingController,public rest: RestService,private storage: Storage) 
{   
  this.baseurl = rest.apiURLs;
  console.log(this.baseurl)
    this.getdata();
// Define the columns for the data table
// (based off the names of the keys in the JSON file)   
}

  ngOnInit() {
  }

  async getdata() {

    const loading = await this.loadingController.create({
      message: ' Please Wait we are Loading Users Information',
      duration: 2000
    });
    await loading.present();
    this.httpa.setDataSerializer('json');
    // tslint:disable-next-line:max-line-length
    this.httpa.get(this.baseurl + 'getusers.php', { }, {'Content-Type': 'application/json'})
    .then(response => {
     console.log(response.data);
     this.data2 = JSON.parse(response.data);
     console.log(this.data2);
     this.rows=this.data2
    });
  }

  async addusers() {
    console.log('addusers');
    const modal = await this.modalController.create({
      component: AddusersPage
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
    this.getdata();
  }

}

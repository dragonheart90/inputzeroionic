import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { RestService } from '../rest.service';
import Swal from 'sweetalert2';
import { Storage } from '@ionic/storage';

export interface Config {
	technologies: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public config : Config;
  public columns : any;
  public rows : any;
  baseurl: any;
  data2: any;
  data: any = {};
  limit:any;


  constructor(private httpa: HTTP, private http: HttpClient, public loadingController: LoadingController,public rest: RestService,private storage: Storage) 
{   
  this.baseurl = rest.apiURL;
    console.log(this.baseurl);
    this.getdata();
// Define the columns for the data table
// (based off the names of the keys in the JSON file)   
this.columns = [
{ prop: 'email' },
{ name: 'first_name' },
{ name: 'last_name' }
];
}

async getdata() {

  const loading = await this.loadingController.create({
    message: ' Please Wait we are Loading Users Information',
    duration: 2000
  });
  await loading.present();
  this.httpa.setDataSerializer('json');
  // tslint:disable-next-line:max-line-length
  this.httpa.get(this.baseurl + 'users', { }, {'Content-Type': 'application/json'})
  .then(response => {
   console.log(response.data);
   this.data2 = JSON.parse(response.data);
   console.log(this.data2.data);
   this.rows=this.data2.data
   this.limit=this.data2.per_page
  });

}


  ngOnInit() {
  }

}

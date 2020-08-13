import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { environment, SERVER_URL,SERVER_URL1 } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private URL = '';
  apiURL: any;
  apiURLs: any;

  constructor() {
    this.apiURL = SERVER_URL;
    this.apiURLs = SERVER_URL1;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {

  constructor(private http: HttpClient) {}
  getData(){
    return this.http.get('https://techgeekhub.netlify.com/feed.json');
  }


}

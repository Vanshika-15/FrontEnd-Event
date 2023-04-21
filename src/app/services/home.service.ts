import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get<any>('http://localhost:5112/api/Speaker')
  }

  getSession(){
    return this.http.get<any>('http://localhost:5112/api/Session')
  }
  getSessionDetails(){
    return this.http.get<any>('http://localhost:5112/api/SessionDetail')
  }
}

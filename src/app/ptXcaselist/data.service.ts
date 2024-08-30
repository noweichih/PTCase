import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getcaselist(clinicid: string): Observable<any> {
    const url = "/api/ptcaselist" //api url :透過proxy設定轉址到  node.js :8168
    const body = { clinicid };
    let options = { // observe: 'response' as 'response',
            headers: new HttpHeaders({
                  'content-type': 'application/json'
            })
    };
    //alert('getptlist '+ body) ;
    return this.http.post<any>(url, body, options).pipe(
      //map(res => res.i)
    );
  }
}
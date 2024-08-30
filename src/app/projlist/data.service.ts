import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getprojlist(ucomp: string): Observable<any> {
    const url = "/api/projlist" //api url :透過proxy設定轉址到  node.js :8168
    const body = { ucomp };
    let options = { // observe: 'response' as 'response',
            headers: new HttpHeaders({
                  'content-type': 'application/json'
            })
    };
    
    return this.http.post<any>(url, body, options).pipe(
      //map(res => res.i)
    );
  }
}
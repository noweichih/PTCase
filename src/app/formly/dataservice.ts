import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServ {
  constructor(private http: HttpClient) {}
  sports = [
    { id: '1', name: 'Soccer' },
    { id: '2', name: 'Basketball' },
  ];

  codebook1(codetype: string): Observable<any> {
    const url = "/api/projlist" //
    const ucomp = "TC"  
    const body = { ucomp };
    let options = { // observe: 'response' as 'response',
            headers: new HttpHeaders({
                  'content-type': 'application/json'
            })
    };
    //alert("enter dataserv:codebook >>> "+ codetype);
    return this.http.post<any>(url, body, options).pipe();

  }
  codebook(codetype: string): Observable<any> {
    const url = "/api/codebook" 
    const body = { codetype };
    let options = { // observe: 'response' as 'response',
            headers: new HttpHeaders({
                  'content-type': 'application/json'
            })
    };
    //alert("enter dataserv:codebook");
    //return this.http.post<any>(url, body, options).pipe();
    return this.http.post<any>(url, body, options).pipe(shareReplay(1));
    
    //return this.http.post(url, body).toPromise().then(response => response!.data);

  }
}

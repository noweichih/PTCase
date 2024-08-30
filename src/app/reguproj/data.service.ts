import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getlist(regucode: string,): Observable<any> {
    const url = "/api/reguproj" //取得專案文件清單
    const body = { regucode };
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
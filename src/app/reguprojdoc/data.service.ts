import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getdoclist(regucode: string, projcode: string): Observable<any> {
    const url = "/api/reguprojdoc" //取得專案文件清單
    const body = { regucode, projcode };
    let options = { 
            headers: new HttpHeaders({
                  'content-type': 'application/json'
            })
    };
    //alert('計畫' + projcode + ' 要求填具之表單資料調閱....')
    return this.http.post<any>(url, body, options).pipe(
      //map(res => res.i)
    );
  }
  reguprojini(regucode: string, projcode: string, compcode: string): Observable<any> {
    const url = "/api/reguprojini" //建立專案所需文件實體於appdoc中
    const body = { regucode, projcode, compcode }; 
    //alert('ucomp' + compcode);
    let options = { 
            headers: new HttpHeaders({
                  'content-type': 'application/json'
            })
    };
    return this.http.post<any>(url, body, options).pipe(
      //map(res => res.i)
    );
  }
}
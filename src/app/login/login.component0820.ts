import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service0820';
//import { GlobalService } from '../global.service'; //data bridge
import { environment, myApConstant } from '../../environments/environments';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent{// implements OnInit{
  userid: string = ''; username: string = '';  password: string = '';

  @ViewChild('useridIn') useridIn!: ElementRef;
  @ViewChild('usernameIn') usernameIn!: ElementRef;
  @ViewChild('passwordIn') passwordIn!: ElementRef;
 
  //constructor(private dataService: DataService, private myGlobal: GlobalService, private router: Router) { }
  constructor(private dataService: DataService, private router: Router) { }
  ngOnInit() { // alert('ngLogin') 
  }
  login() {
    // 在這裡實現登入邏輯
    //alert(this.usernameIn.nativeElement.value);alert(this.passwordIn.nativeElement.value);
    let uid= this.usernameIn.nativeElement.value;
    let upwd= this.passwordIn.nativeElement.value;
    //alert('login介面中uid>>>' + uid);

    this.dataService.login(uid, upwd).subscribe(
      res=> { // 在這裡處理從 Node.js API 返回的資料 alert(i);
        let i = res.i;
        //alert('1' + res.i+ res.uname+ res.ucomp); // 訪問 res回傳的各欄位
        if (i > 0) {//leagle user
          //this.myGlobal.GlobalVar.ucomp= 'Hello, world!';
          //this.myGlobal.GlobalVar = {uid: uid, uname: res.uname, ucomp: res.ucomp, docid: 0};
          /*this.myGlobal.GlobalVar.uid = uid;  this.myGlobal.GlobalVar.uname = res.uname;
          this.myGlobal.GlobalVar.ucomp = res.ucomp;  */
          environment.uid = uid;  environment.uname = res.uname;  environment.ucomp = res.ucomp;  
          alert(res.ucomp +' 院所  ' + res.uname + ' 小姐/先生，\n您已登入復健診療系統!!');
          //alert('全域測試'+this.myGlobal.GlobalVar.ucomp )
          this.router.navigate(['/ptcaselist']);//應用首頁為 ptCase
          //this.router.navigate(['/caselist']).then((x) => alert('開啟待診案例' + x));
          //this.router.navigate(['/list-display']);
          //this.router.navigate(['/form']);
        } else { alert('輸入帳密錯誤!'); }
        
      },
      error => {
        // 在這裡處理錯誤
        console.error(error);
      }
    );
   
  }
}
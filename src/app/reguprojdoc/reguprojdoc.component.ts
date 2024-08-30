import { Component, OnInit } from '@angular/core';
//import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ReguProjDocList } from './reguprojdoc.model';
import { DataService } from './data.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'reguprojdoc-list',
  templateUrl: './reguprojdoc.component.html',
  styleUrls: ['./reguprojdoc.component.css']
})
export class ReguProjDocComponent implements OnInit { 
  regucode: string= '';  projcode: string= '' ;  ucomp:string = '';
  doclist: ReguProjDocList[] = [];//以datamodel 銜接html

  constructor(
    private appdocService: DataService,
    private route: ActivatedRoute,
    private globalService: GlobalService
  ) {//alert('拿參數來'+this.route.snapshot.paramMap.get('projid'));
    }

  ngOnInit(): void {
    let regucode = this.route.snapshot.paramMap.get('regucode'); this.regucode = regucode!;
    let projcode = this.route.snapshot.paramMap.get('projcode'); this.projcode = projcode!;
    this.ucomp = this.globalService.GlobalVar.ucomp!; 
    //alert('公司'+this.ucomp +'.....' + this.globalService.GlobalVar.ucomp!); 
    this.appdocService.getdoclist(regucode!, projcode!).subscribe(
      docgot => {
        this.doclist = docgot;//放回docmodel中；且bind into HTML view
      },
      error => {
        console.log(error);
      }
    );
  }
  onButtonClick() {
    // 在這裡實現按鈕的操作    alert('按鈕被點擊了');
    this.appdocService.reguprojini(this.regucode!, this.projcode!, this.ucomp!).subscribe(
      docgot => {
        //this.doclist = docgot;//放回docmodel中；且bind into HTML view
      },
      error => {
        console.log(error);
      })
    alert('已為您建立'+ this.regucode +'專案!\n請於首頁之公司專案全覽清單中檢視!');
  }
}
import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { CaseShape } from './caselist.model';
import { DataService } from '../ptcaselist/data.service';//'./data.service';//ProjectService
//import { GlobalService } from '../../assets/global.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'pt-case-list',
  templateUrl: './caselist.Component.html' ,
  styleUrls: ['./caselist.component.css']
})
export class CaseListComponent implements OnInit { //ProjctListComponent
  caselist: CaseShape[]=[];

  constructor(
    private ptcaseService: DataService, 
    private globalService: GlobalService
  ) {}

  ngOnInit() {
    const uclinic = 'QY00000001';//this.globalService.GlobalVar.uclinic;//this.route.snapshot.paramMap.get('companyId');
    //alert(JSON.stringify(this.globalService.GlobalVar));
   
    this.ptcaseService.getcaselist(uclinic).subscribe(
      casegot => {
        this.caselist = casegot;//bind into HTML view
        //alert('調閱本公司(' + uclinic + ')計畫並顯示!!' + this.projlist);
      },
      error => {
        console.log(error);
      }
    );
  }
}
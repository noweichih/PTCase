import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { ProjShape } from './projlist.model';
import { DataService } from '../projlist/data.service';// './data.service';//ProjectService
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './projlist.component.html' ,
  styleUrls: ['./projlist.component.css']
})
export class ProjListComponent implements OnInit { //ProjctListComponent
  projlist: ProjShape[]=[];

  constructor(
    private projectService: DataService,
    //private route: ActivatedRoute,
    private globalService: GlobalService
  ) {}

  ngOnInit() {
    const ucomp = this.globalService.GlobalVar.ucomp;//this.route.snapshot.paramMap.get('companyId');
    alert('公司號/n'+JSON.stringify(this.globalService.GlobalVar));
    
    this.projectService.getprojlist(ucomp).subscribe(
      projgot => {
        this.projlist = projgot;//bind into HTML view
        //alert('調閱本公司(' + ucomp + ')計畫並顯示!!' + this.projlist);
      },
      error => {
        console.log(error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReguProjs } from './reguproj.model';
import { DataService } from './data.service';//AppDocService
import { MatTableDataSource } from '@angular/material/table';

//import { GlobalService } from '../global.service';

@Component({
    selector: 'app-reguproj',
    templateUrl: './reguproj.component.html',
    styleUrls: ['./reguproj.component.css']
})

export class ReguProjComponent implements OnInit {  
  //compcode: string;//避免sql injection
  regucode: string = '%';
  //reguproj: ReguProjs[] = [];//以datamodel 銜接html
  reguproj: ReguProjs = [];
  //reguproj: Array<{ regucode: string, projcode: string, proj: string }> =[];
  displayedColumns: string[] = ['regucode', 'projcode', 'proj'];
  dataSource!: MatTableDataSource<ReguProjs>;

  constructor(
    private reguprojService: DataService,
    private route: ActivatedRoute)
    { 
    }

  ngOnInit(): void {
    this.reguprojService.getlist(this.regucode).subscribe(
      docgot => {
        this.reguproj = docgot;//放回docmodel中；且bind into HTML view
        //alert('return back'+ docgot)
      },
      error => {
        console.log(error);
      }
    );
  }
}
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { DataServ } from './dataservice';
import { CodeServ } from '../../service/data.codebook';//CodeBookService
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-button',
  styleUrls: ['./formlytest.component.css'],
  templateUrl: './formlytest.component.html'
  /*
    template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <formly-form [form]="form" [fields]="fields" [model]="model" [templateOptions]="{template: 'bootstrap'}"></formly-form>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `,
  */
 /*
  template: `
    <form nz-form [formGroup]="form" (ngSubmit)="onSubmit()">
      <formly-form [form]="form" [fields]="fields" [model]="model" ></formly-form>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `, 
  */
})
//export class FormTestComponent implements OnInit{
export class FormTestComponent {
  form = new FormGroup({});  model: any = {};
  options: FormlyFormOptions = {};
  onClick() { alert("onClick"); }
  tipdata:string ='';
  //constructor(private http: HttpClient, private dataService: DataService) {}
  constructor(private http: HttpClient, private formlyJsonschema: FormlyJsonschema,
    private codeOpt: DataServ, private codeItem: CodeServ) 
  
  {//this.addEvents();
   //alert('field2\n' + this.tmptry);//JSON.stringify(this.fields2));
  
   const formlyFields = this.formlyJsonschema.toFieldConfig(JSON.parse(this.formlyJson));
    alert('line 46:' + JSON.stringify(formlyFields));
    alert(JSON.stringify(formlyFields.fieldGroup));
    //OKOK.....
    //this.fields = formlyFields.fieldGroup!;
 
   /*this.fields = [this.formlyJsonschema.toFieldConfig(JSON.parse(this.formlyJson))];
   this.fields =  [ formlyFields];
   this.fields =  [
    {
      key: 'tabs',
      type: 'tabs',
      fieldGroup: [
        {
          key: 'personalData',
          type: 'tab',
          templateOptions: {
            label: 'Personal data',
          }
        },
      ],
    },
  ]; */
  }
 
  /*
  form = new FormGroup({});  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter name',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Enter email',
        required: true,
      },
    },
  ];*/
  //line 106-594
  fields: FormlyFieldConfig[] = [
    {
      //"type": "tabs",
      "fieldGroupClassName": "row",
      "fieldGroup": [
        { //"wrappers": ["tab"],
          
          "props": { "label": "Personal data!!!!!" }, 
          "fieldGroup": [
            {
              "key": "sport",
              "type": "input",
              "className": "col-6",
              "props": 
              { "label": "Sport",
              }
            },
            {
              "key": "sport1",
              "type": "input",
              "className": "col-6",
              "props": 
              { "label": "Sport1",
              }
            },
            {
              "key": "sport2",
              "type": "select", "className": "col-6",
              "props": { 
                "label": "Sport2",
                "options": this.codeItem.codebookitemObs('sport'),
                "valueProp": 'id',
                "labelProp": 'name'
              }
            },
            {
              key: 'linktest',
              type: 'link',
              templateOptions: {
                type: 'link',
                label: 'Link to Google'
              }
            },
            {
              key: 'newLink',
              type: 'button',  "className": "col-6",
              templateOptions: {
                label: '2New Link',
                element: 'a',
                className: 'my-button-class',
                attributes: {
                  href: 'https://example.com'}
              }
            },
            {"key":"webLink2" ,
             "type": "button", "className": "col-6",
            },
            {"key": "tstbtn",
             "type": "button",
             "templateOptions": {
              "label": "Click this button",
              "text": "JSON Only",
              "btnType": "info",
                description: 'These can have labels and stuff too if you want to....',
              },
            },

            {
              "key": "buttonlink",
              "type": "input", "className": "col-6",
              "props": { label: 'Add New LinkOHOHOH',
              
              }
            },
            {
              "key": "sport21",
              "type": "select", "className": "col-6",
              "props": { 
                "label": "Sport21111", 
                "options": this.codeItem.codebookitemObs('510ktype'),
                "valueProp": 'id',
                "labelProp": 'name'
              }
            },
            {
              key: "sport3",
              type: "select", "className": "col-6",
              templateOptions: {
                label: "Sport3",
                options: [],
                valueProp: "id",
                labelProp: "name"
              }
            }
          ]
        }
      ]
    }
  ];
  //        "options": this.codeOpt.codebook(),
  formlyJson = `
  {
    "type": "object",
    "properties": {
      "name": {
        "props": {
          "title": "Name???"
        },
        "type": "select",
        "title": "Name",

        "valueProp": "value",
        "labelProp": "label"
      },
      "email": {
        "type": "select",
        "title": "eMail...",
        "format": "email"
      },
      "age": {
        "type": "number",
        "title": "Age",
        "minimum": 0
      }
    }
  }
`;
  formlyJson1  = `
  {
    "type": "tabs",
    "fieldGroup": [
      {
        "props": { "label": "Personal data" },
        "fieldGroup": [
          {
            key: 'sport',
            type: 'input',
            props: {
              label: 'Sport'
            },
          },
          {
            "key": "sport2",
            "type": "select",
            "props": { 
              "label": "Sport2"
            }
          }
        ]
      }
    ]
  }
  `;
//fields2 : FormlyFieldConfig = JSON.parse(this.tmptry);
 
  sports = [
    { id: '1', name: 'Soccer' },
    { id: '2', name: 'Basketball' },
  ];

  getSports(): Observable<any[]> {
    alert('line 193### dataservice formlytest'); //return of(this.sports);
    //const url = "/api/codebook" //取得代碼    //const body = { "" }; //參數
    const url = "/api/projlist" //
    const ucomp = "TC"  
    const body = { ucomp };

    let options = { // observe: 'response' as 'response',
      headers: new HttpHeaders({
            'content-type': 'application/json'
      })
    };
    http: HttpClient;
    this.http.post<any>(url, body, options).pipe(
      //map(res => res.i)
    );
    alert('line 208### dataservice formlytest'); 
    return this.http.get<any[]>("/api/codebook").pipe(shareReplay(1));
    //return this.http.get<any[]>("/api/codebook").pipe(shareReplay(1));
    // return of ([
    //  { id: '1', name: 'Soccer' },  { id: '2', name: 'Basketball' } 
    //]);
  }
  dropdownitem(codetype: string): Observable<any[]> {
    const url = "/api/dropdownitem"; const body = { codetype };//依據類型，取得代碼資料
    let options = {headers: new HttpHeaders({'content-type': 'application/json'})};
    alert('ts 185行 dropdown from db, type:' + codetype); 
    return this.http.post<{ id: string, name: string}>(url, body, options).pipe(
      map(res => {
        const items = JSON.parse(JSON.stringify(res));
        alert(JSON.stringify(items));
        return items;
      }) //end of map
    );
  }


  onSubmit() {
    alert("onsubmit")
    console.log(this.model);
  }

  /*
  codebook(codetype: any) {
    alert('codebook!!!');
    return this.http.post('/api/codebook', codetype).toPromise().then();
    //return this.http.post('/api/codebook', { codetype }).toPromise().then(response => response.data);

  }
  */
  submit() {
    alert('submit/n'+JSON.stringify(this.fields));
    const A = this.fields;
    for (let i = 0; i < A.length; i++) {
        alert ('i:'+ i +'\n'+JSON.stringify(A[i]))
      }
  }
  //-------------------------------------------
  onModelChange(event:any) {
    //alert('event handle')
    if (event.key === 'sport' && event.value) {
      alert('You selected an option!');
    }
  }
  //----------------------------
  addEvents() {
    this.fields.forEach(f => {
      if (f.fieldGroup) {
        //this.addEvents(f.fieldGroup);
        return; // fieldGroups don't need an ID
      }
      if (f.fieldArray) {
        //this.addEvents(f.fieldArray.fieldGroup);
        return; // fieldGroups don't need an ID
      }
      if(f.type == 'select'){alert('select event')
    
      }
      if(f.type == 'radio'){
      
      }
    });
  }

}

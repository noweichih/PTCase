import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { DataServ } from './dataservice';
 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-form',
  //styleUrls: ['./formlytest.component.css'],
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

  tipdata:string ='';
  //constructor(private http: HttpClient, private dataService: DataService) {}
  constructor(private http: HttpClient) {this.addEvents();
  alert('field2\n' + this.tmptry);//JSON.stringify(this.fields2));
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
      "type": "tabs",
      "fieldGroup": [
        {
          "props": { "label": "Personal data" },
          "fieldGroup": [
            {
              "key": "510kType",
              "type": "select",
              "templateOptions": {
                "label": "510k type",
                "required": true,
                //"asyncOptions": this.codebook.bind(this, { topic: '510ktype' })
              },
              //expressionProperties: {
              //  'templateOptions.options': 'model.options'
              //}
            },
            {
              key: 'sport',
              type: 'select',
              props: {
                label: 'Sport',
                options:this.dropdownitem('510ktype'),// this.getSports(),
                valueProp: 'id',
                labelProp: 'name',
              },
            },
            {
              "key": "sport2",
              "type": "select",
              "props": { 
                "label": "Sport2",
                "options": this.dropdownitem("sport"),//"this.dropdownitem('sport')"
                "valueProp": "id",
                "labelProp": "name",
              },
            },
            {
              "key": "sport3",
              "type": "select",
              "props": { 
                "label": "Sport3 510",
                //"options": `JSON.parse(this.dropdownitem('510ktype'))`,
                "valueProp": "id",
                "labelProp": "name",
                //"onMouseOver": "{\"type\":\"function\",\"body\":\"alert('Mouse over!');\"}"
                //onMouseOver: JSON.parse(JSON.stringify(function() { alert("Mouse over!"); }))
                //onMouseOver: JSON.stringify(function() { alert("Mouse over!"); })
     
              }

            },
            {
              "key": "age",
              "type": "input",
              "props": {
                "type": "number",
                "label": "Age",
                "required": true,
              }
            }
          ]
        },
        {
          "props": { "label": "Destination" },
          "fieldGroup": [
            {
              "key": "country",
              "type": "input",
              "props": {
                "label": "Country",
                "required": true,
              }
            }
          ]
        },
        {
          "props": { label: 'Day of the trip' },
          "fieldGroup": [
            {
              "key": "day",
              "type": "input",
              "props": {
                "type": "date",
                "label": "'Day of the trip",
                "required": true,
              }
            }
          ]
        }

      ]
    }
  ];
  tmptry = `
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
    //alert('dataservice formlytest'); return of(this.sports);
     return of ([
      { id: '1', name: 'Soccer' },  { id: '2', name: 'Basketball' } 
    ]);
  }
  dropdownitem(codetype: string): Observable<any[]> {
    const url = "/api/dropdownitem"; const body = { codetype };//依據類型，取得代碼資料
    let options = {headers: new HttpHeaders({'content-type': 'application/json'})};
    //alert('dropdown from db, type:' + codetype); 
    return this.http.post<{ id: string, name: string}>(url, body, options).pipe(
      map(res => {
        const items = JSON.parse(JSON.stringify(res));
        alert(JSON.stringify(items));
        return items;
      }) //end of map
    );
  }


  onSubmit() {
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
    alert(JSON.stringify(this.fields));
    const A = this.fields;
    for (let i = 0; i < A.length; i++) {
        alert ('i:'+ i +'\n'+JSON.stringify(A[i]))
      }
    
  }
  //-------------------------------------------
  onModelChange(event:any) {
    alert('event handle')
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

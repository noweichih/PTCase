import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  styleUrls: ['./formlytest.component.css'],
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
   template: `
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>
</form>
<input type="text" name="tipdata">
  `,
})
export class FormTestComponent implements OnInit{
  form = new FormGroup({});  model: any = {};
  options: FormlyFormOptions = {};
  tipdata:string ='';
  constructor(private http: HttpClient) {}
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
                "asyncOptions": this.codebook.bind(this, { topic: '510ktype' })
              },
              expressionProperties: {
                'templateOptions.options': 'model.options'
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



  onSubmit() {
    console.log(this.model);
  }
  ngOnInit(): void {
    //console.log(JSON.stringify(this.fields[0]));debugger;//F12從瀏覽器主控端觀看資料
    //alert('format\n'+ JSON.stringify(this.fields[0]));
    //this.form.patchValue({firstname:"ddd"});
    this.model ={"firstname":"ddd"};//重要 for updating
    let strg =JSON.stringify(this.fields[0]);
    const tipdataControl = this.form.get('tipdata');
    this.tipdata= JSON.stringify(this.fields[0]);
    //tipdataControl!.setValue(strg); tipdataControl!.value = strg;


    // 將tabs轉換為ngx-formly的欄位配置
    //this.fields = this.convertToFields(tabs);

 
  }
  codebook(codetype: any) {
    alert('codebook!!!');
    return this.http.post('/api/codebook', codetype).toPromise().then();
    //return this.http.post('/api/codebook', { codetype }).toPromise().then(response => response.data);

  }
  //-------------------------------------------
  convertToFields(tabs: any[]): FormlyFieldConfig[] {
    const fields: FormlyFieldConfig[] = [];

    tabs.forEach((tab: any) => {
      const field: FormlyFieldConfig = {
        key: tab.label,
        type: 'tab',
        templateOptions: {
          label: tab.label
        },
        fieldGroup: []
      };

      tab.fields.forEach((fieldDef: any) => {
        const formlyField: FormlyFieldConfig = {
          key: fieldDef.key,
          type: fieldDef.type,
          templateOptions: {
            label: fieldDef.templateOptions.label,
            required: fieldDef.templateOptions.required
          }
        };

        if (fieldDef.type === 'input') {
          formlyField.templateOptions!.type = fieldDef.templateOptions.type;
        }

        field.fieldGroup!.push(formlyField);
      });

      fields.push(field);
    });

    return fields;
  }
}

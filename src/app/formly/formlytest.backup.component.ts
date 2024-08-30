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

  /*
  fields: FormlyFieldConfig[] = [
    {
      "type": "tabs",
      "fieldGroup": [
        
                //★★★計劃書正式內容
                {
                  //page0
                  "props": { "label": "主頁與標題" },
                  "fieldGroup": [
                    {
                      "key": "ProjTitle",
                      "type": "input",
                      "props": {
                        "label": "計畫標題",
                        "required": true,
                        "maxWordCount": 1,
                        "rows": 5
                      }
                    },
                    {
                      "key": "ProjVer",
                      "type": "input",
                      "props": {
                        "label": "計畫版本",
                        "placeholder": "例如:1.00",
                        "required": false
                      }
                    },
                    {
                      "key": "ProjDate",
                      "type": "input",
                      "props": {
                        "label": "計畫日期",
                        "type": "date",
                        "required": true
                      }
                    }
                  ]
                },
                {
                  //page1
                  "props": { "label": "聯絡資訊" },
                  "fieldGroup": [
                    //計畫聯絡人
                    {
                      "key": "Sponsor",
                      "type": "input",
                      "props": {
                        "label": "試驗委託廠商/試驗機構",
                        "required": false
                      }
                    },
                    {
                      "key": "ContactRole",
                      "type": "input",
                      "props": {
                        "label": "聯絡人角色",
                        "required": false
                      }
                    },
                    {
                      "key": "ContactPos",
                      "type": "input",
                      "props": {
                        "label": "聯絡人單位/職稱",
                        "required": false
                      }
                    },
                    {
                      "key": "ContactAddr",
                      "type": "input",
                      "props": {
                        "label": "聯絡人地址",
                        "required": false
                      }
                    },
                    {
                      "key": "Sponsor",
                      "type": "input",
                      "props": {
                        "label": "試驗委託廠商/試驗機構",
                        "required": false
                      }
                    },
                    {
                      "key": "ContactOfficialPhone",
                      "type": "input",
                      "props": {
                        "label": "聯絡人辦公室電話",
                        "required": false
                      }
                    },
                    {
                      "key": "ContactCellPhone",
                      "type": "input",
                      "props": {
                        "label": "聯絡人手機",
                        "required": false
                      }
                    },
                    {
                      "key": "ContactFAX",
                      "type": "input",
                      "props": {
                        "label": "聯絡人傳真",
                        "required": false
                      }
                    },
                    {
                      "key": "ContactEMail",
                      "type": "input",
                      "props": {
                        "label": "聯絡人電子郵件信箱",
                        "required": false
                      }
                    },
                    //試驗機構
                    {
                      "key": "Org",
                      "type": "input",
                      "props": {
                        "label": "試驗機構名稱",
                        "required": false
                      }
                    },
                    {
                      "key": "OrgAddr",
                      "type": "input",
                      "props": {
                        "label": "試驗機構地址",
                        "required": false
                      }
                    },
                    {
                      "key": "OrgOther",
                      "type": "input",
                      "props": {
                        "label": "其他試驗機構名稱",
                        "required": false
                      }
                    },
                    {
                      "key": "OrgAddrOther",
                      "type": "input",
                      "props": {
                        "label": "其他試驗機構地址",
                        "required": false
                      }
                    },
                    //計畫主持人
                    {
                      "key": "ManagerRole",
                      "type": "input",
                      "props": {
                        "label": "主持人角色",
                        "required": false
                      }
                    },
                    {
                      "key": "Manager",
                      "type": "input",
                      "props": {
                        "label": "主持人姓名",
                        "required": false
                      }
                    },
                    {
                      "key": "ManagerPos",
                      "type": "input",
                      "props": {
                        "label": "主持人單位/職稱",
                        "required": false
                      }
                    },
                    {
                      "key": "ManagerAddr",
                      "type": "input",
                      "props": {
                        "label": "主持人地址",
                        "required": false
                      }
                    },
                    {
                      "key": "ManagerOfficialPhone",
                      "type": "input",
                      "props": {
                        "label": "主持人辦公室電話",
                        "required": false
                      }
                    },
                    {
                      "key": "ManagerCellPhone",
                      "type": "input",
                      "props": {
                        "label": "主持人手機",
                        "required": false
                      }
                    },
                    {
                      "key": "ManagerFAX",
                      "type": "input",
                      "props": {
                        "label": "主持人傳真",
                        "required": false
                      }
                    },
                    {
                      "key": "ManagerEMail",
                      "type": "input",
                      "props": {
                        "label": "主持人電子郵件信箱",
                        "required": false
                      }
                    },
                    //其他人員(機動性新增)
                    {
                      "key": "StaffRole",
                      "type": "input",
                      "props": {
                        "label": "其他人員角色",
                        "required": false
                      }
                    },
                    {
                      "key": "Staff",
                      "type": "input",
                      "props": {
                        "label": "其他人員姓名",
                        "required": false
                      }
                    },
                    {
                      "key": "StaffPos",
                      "type": "input",
                      "props": {
                        "label": "其他人員單位/職稱",
                        "required": false
                      }
                    },
                    {
                      "key": "StaffAddr",
                      "type": "input",
                      "props": {
                        "label": "其他人員地址",
                        "required": false
                      }
                    },
                    {
                      "key": "StaffOfficialPhone",
                      "type": "input",
                      "props": {
                        "label": "其他人員辦公室電話",
                        "required": false
                      }
                    },
                    {
                      "key": "StaffCellPhone",
                      "type": "input",
                      "props": {
                        "label": "其他人員手機",
                        "required": false
                      }
                    },
                    {
                      "key": "StaffFAX",
                      "type": "input",
                      "props": {
                        "label": "其他人員傳真",
                        "required": false
                      }
                    },
                    {
                      "key": "StaffEMail",
                      "type": "input",
                      "props": {
                        "label": "其他人員電子郵件信箱",
                        "required": false
                      }
                    }
                  ]
                },
                {
                  //page2
                  "props": { "label": "摘要" },
                  "fieldGroup": [
                    {
                      "key": "SummaryNote",
                      "type": "textarea",
                      "props": {
                        "label": "摘要",
                        "type": "textarea",
                        "required": false,
                        "maxWordCount": 1000,
                        "rows": 20
                      }
                    }
                  ]
                },
                {
                  //page3
                  "props": { "label": "試驗介紹" },
                  "fieldGroup": [
                    {
                      "key": "Org",
                      "type": "input",
                      "props": {
                        "label": "試驗機構名稱",
                        "required": false
                      }
                    },
                    {
                      "key": "OrgAddr",
                      "type": "input",
                      "props": {
                        "label": "試驗機構地址",
                        "required": false
                      }
                    },
        
                    {
                      "key": "OrgOther",
                      "type": "input",
                      "props": {
                        "label": "其他試驗機構名稱",
                        "required": false
                      }
                    },
                    {
                      "key": "OrgAddrOther",
                      "type": "input",
                      "props": {
                        "label": "其他試驗機構地址",
                        "required": false
                      }
                    }
                  ]
                },
        
                {
                  //page4
                  "props": { "label": "試驗目的" },
                  "fieldGroup": [
                    {
                      "key": "country",
                      "type": "input",
                      "props": {
                        "label": "Country",
                        "required": false
                      }
                    }
                  ]
                },
                {
                  //page5
                  "props": { "label": "受試者的選擇及退出" },
                  "fieldGroup": [
                    {
                      "key": "country",
                      "type": "input",
                      "props": {
                        "label": "Country",
                        "required": false
                      }
                    }
                  ]
                },
                {
                  //page6
                  "props": { "label": "療效評估" },
                  "fieldGroup": [
                    {
                      "key": "country",
                      "type": "input",
                      "props": {
                        "label": "Country",
                        "required": false
                      }
                    }
                  ]
                },
                {
                  //page7
                  "props": { "label": "安全性評估" },
                  "fieldGroup": [
                    {
                      "key": "country",
                      "type": "input",
                      "props": {
                        "label": "Country",
                        "required": false
                      }
                    }
                  ]
                },
                {
                  //page8
                  "props": { "label": "統計分析" },
                  "fieldGroup": [
                    {
                      "key": "country",
                      "type": "input",
                      "props": {
                        "label": "Country",
                        "required": false
                      }
                    }
                  ]
                },
                {
                  //page9
                  "props": { "label": "原始資料檢視" },
                  "fieldGroup": [
                    {
                      "key": "country",
                      "type": "input",
                      "props": {
                        "label": "Country",
                        "required": false
                      }
                    }
                  ]
                },
                {
                  //page10
                  "props": { "label": "品質管制" },
                  "fieldGroup": [
                    {
                      "key": "country",
                      "type": "input",
                      "props": {
                        "label": "Country",
                        "required": false
                      }
                    }
                  ]
                },
                {
                  //page11
                  "props": { "label": "倫理考量" },
                  "fieldGroup": [
                    {
                      "key": "country",
                      "type": "input",
                      "props": {
                        "label": "Country",
                        "required": false
                      }
                    }
                  ]
                },
                {
                  //page12
                  "props": { "label": "資料處理及保存" },
                  "fieldGroup": [
                    {
                      "key": "country",
                      "type": "input",
                      "props": {
                        "label": "Country",
                        "required": false
                      }
                    }
                  ]
                },
                {
                  //page13
                  "props": { "label": "財務及保險" },
                  "fieldGroup": [
                    {
                      "key": "country",
                      "type": "input",
                      "props": {
                        "label": "Country",
                        "required": false
                      }
                    }
                  ]
                },
                {
                  //page14
                  "props": { "label": "發表著作原則" },
                  "fieldGroup": [
                    {
                      "key": "day",
                      "type": "input",
                      "props": {
                        "type": "date",
                        "label": "Day of the trip",
                        "required": false
                      }
                    }
                  ]
                }
      ]
    }
  ];*/


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
//另一個測試資料
    const tabs = [
      {
        label: 'Personal data',
        fields: [
          {
            key: 'firstname',
            type: 'input',
            templateOptions: {
              label: 'First name',
              required: true
            }
          },
          {
            key: 'lastname',
            type: 'input',
            templateOptions: {
              label: 'Last name',
              required: true
            }
          },
          {
            key: 'age',
            type: 'input',
            templateOptions: {
              type: 'number',
              label: 'Age',
              required: true
            }
          }
        ]
      },
      {
        label: 'Destination',
        fields: [
          {
            key: 'country',
            type: 'input',
            templateOptions: {
              label: 'Country',
              required: true
            }
          },
          {
            key: 'city',
            type: 'input',
            templateOptions: {
              label: 'City',
              required: true
            }
          }
        ]
      },
      {
        label: 'Day of the trip',
        fields: [
          {
            key: 'date',
            type: 'input',
            templateOptions: {
              type: 'date',
              label: 'Date',
              required: true
            }
          },
          {
            key: 'time',
            type: 'input',
            templateOptions: {
              type: 'time',
              label: 'Time',
              required: true
            }
          }
        ]
      }
    ];

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

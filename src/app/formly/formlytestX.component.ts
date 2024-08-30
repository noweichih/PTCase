import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formly-test',
  templateUrl: './formly-test.component.html',
  styleUrls: ['./formly-test.component.css']
})
export class FormlyTestComponent implements OnInit {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [];
  options = {};

  constructor() { }

  ngOnInit() {
    // 創建一個多個tabs的表單
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
    this.fields = this.convertToFields(tabs);

    // 設置ngx-formly的選項
    this.options = {
      formState: {
        form: this.form
      }
    };
  }

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

  onSubmit() {
    console.log(this.form.value);
  }
}
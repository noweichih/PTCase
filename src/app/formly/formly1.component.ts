import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

interface TabConfig {
  label: string;
  model: any;
  form: FormGroup;
  fields: FormlyFieldConfig[];
}

@Component({
  selector: 'app-tab-form',
  templateUrl: './formly.component.html',
  //styleUrls: ['./tab-form.component.css']
})
export class FormlyComponent implements OnInit {

  form = new FormGroup({});
  model = {};
  options = {};

  tabs: TabConfig[] = [];

  constructor() { }

  ngOnInit() {
    this.tabs = [
      {
        label: 'Tab 1',
        model: {},
        form: new FormGroup({}),
        fields: [
          {
            key: 'field1',
            type: 'input',
            templateOptions: {
              label: 'Field 1',
              required: true
            }
          },
          {
            key: 'field2',
            type: 'input',
            templateOptions: {
              label: 'Field 2',
              required: true
            }
          }
        ]
      },
      {
        label: 'Tab 2',
        model: {},
        form: new FormGroup({}),
        fields: [
          {
            key: 'field3',
            type: 'input',
            templateOptions: {
              label: 'Field 3',
              required: true
            }
          },
          {
            key: 'field4',
            type: 'input',
            templateOptions: {
              label: 'Field 4',
              required: true
            }
          }
        ]
      }
    ];
  }

}
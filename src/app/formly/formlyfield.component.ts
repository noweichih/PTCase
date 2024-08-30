import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formly',
  templateUrl: './formlyfield.component.html',
  styleUrls: ['./formly.component.css']
})
export class FormlyComponent {
  activeTabId = 'tab1';

  fields: FormlyFieldConfig[] = [
    {
      key: 'tabs',
      type: 'tabs',
      fieldGroup: [
        {
          key: 'tab1',
          type: 'tab',
          templateOptions: { label: 'Tab 1' },
          fieldGroup: [
            {
              key: 'input1',
              type: 'input',
              templateOptions: {
                label: 'Input 1',
                placeholder: 'Enter input 1'
              }
            },
            {
              key: 'input2',
              type: 'input',
              templateOptions: {
                label: 'Input 2',
                placeholder: 'Enter input 2'
              }
            }
          ]
        },
        {
          key: 'tab2',
          type: 'tab',
          templateOptions: { label: 'Tab 2' },
          fieldGroup: [
            {
              key: 'select1',
              type: 'select',
              templateOptions: {
                label: 'Select 1',
                placeholder: 'Select an option',
                options: [
                  { label: 'Option 1', value: 'option1' },
                  { label: 'Option 2', value: 'option2' },
                  { label: 'Option 3', value: 'option3' }
                ]
              }
            },
            {
              key: 'checkbox1',
              type: 'checkbox',
              templateOptions: {
                label: 'Checkbox 1'
              }
            }
          ]
        },
        {
          key: 'tab3',
          type: 'tab',
          templateOptions: { label: 'Tab 3' },
          fieldGroup: [
            {
              key: 'radio1',
              type: 'radio',
              templateOptions: {
                label: 'Radio 1',
                options: [
                  { label: 'Option 1', value: 'option1' },
                  { label: 'Option 2', value: 'option2' },
                  { label: 'Option 3', value: 'option3' }
                ]
              }
            },
            {
              key: 'textarea1',
              type: 'textarea',
              templateOptions: {
                label: 'Textarea 1',
                placeholder: 'Enter text'
              }
            }
          ]
        }
      ]
    }
  ];

  form = new FormGroup({});  model = {};  options = {};

  onSubmit() {
    console.log('Form submitted for tab: ' + this.activeTabId);
    //alert('Form submitted for tab: ' + this.activeTabId);
    alert('Form submitted for field: ' + JSON.stringify(this.fields));
  }
}
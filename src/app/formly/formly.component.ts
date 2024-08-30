import { Component } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.css']
})
export class FormlyComponent {
  activeTabId = 'tab2';
  tabs = [
    {
      id: 'tab1',
      label: '主頁與標題',
      model: {},
      form: new FormGroup({}),
      fields: [
        {
          key: 'ProjTitle',
          type: 'input',
          templateOptions: {
            label: '計畫標題',
            required: true,
            maxWordCount: 1,
            rows: 5,
          },
        },
        {
          key: 'ProjVer',
          type: 'input',
          templateOptions: {
            label: '計畫版本',
            placeholder: '例如:1.00',
            required: false,
          },
        },
        {
          key: 'ProjDate',
          type: 'input',
          templateOptions: {
            label: '計畫日期',
            type: 'date',
            required: true,
          },
        },
      ]
    },
    {
      id: 'tab2',
      label: '聯絡資訊',
      model: {},
      form: new FormGroup({}),
      fields: [
            //計畫聯絡人
            {
              key: 'Sponsor',
              type: 'input',
              templateOptions: {
                label: '試驗委託廠商/試驗機構',
                required: false,
              },
            },
            {
              key: 'ContactRole',
              type: 'input',
              templateOptions: {
                label: '聯絡人角色',
                required: false,
              },
            },
            {
              key: 'ContactPos',
              type: 'input',
              templateOptions: {
                label: '聯絡人單位/職稱',
                required: false,
              },
            },
            {
              key: 'ContactAddr',
              type: 'input',
              templateOptions: {
                label: '聯絡人地址',
                required: false,
              },
            },
            {
              key: 'Sponsor',
              type: 'input',
              templateOptions: {
                label: '試驗委託廠商/試驗機構',
                required: false,
              },
            },
            {
              key: 'ContactOfficialPhone',
              type: 'input',
              templateOptions: {
                label: '聯絡人辦公室電話',
                required: false,
              },
            },
            {
              key: 'ContactCellPhone',
              type: 'input',
              templateOptions: {
                label: '聯絡人手機',
                required: false,
              },
            },
            {
              key: 'ContactFAX',
              type: 'input',
              templateOptions: {
                label: '聯絡人傳真',
                required: false,
              },
            },
            {
              key: 'ContactEMail',
              type: 'input',
              templateOptions: {
                label: '聯絡人電子郵件信箱',
                required: false,
              },
            },
            //試驗機構
            {
              key: 'Org',
              type: 'input',
              templateOptions: {
                label: '試驗機構名稱',
                required: false,
              },
            },
            {
              key: 'OrgAddr',
              type: 'input',
              templateOptions: {
                label: '試驗機構地址',
                required: false,
              },
            },
            {
              key: 'OrgOther',
              type: 'input',
              templateOptions: {
                label: '其他試驗機構名稱',
                required: false,
              },
            },
            {
              key: 'OrgAddrOther',
              type: 'input',
              templateOptions: {
                label: '其他試驗機構地址',
                required: false,
              },
            },
            //計畫主持人
            {
              key: 'ManagerRole',
              type: 'input',
              templateOptions: {
                label: '主持人角色',
                required: false,
              },
            },
            {
              key: 'Manager',
              type: 'input',
              templateOptions: {
                label: '主持人姓名',
                required: false,
              },
            },
            {
              key: 'ManagerPos',
              type: 'input',
              templateOptions: {
                label: '主持人單位/職稱',
                required: false,
              },
            },
            {
              key: 'ManagerAddr',
              type: 'input',
              templateOptions: {
                label: '主持人地址',
                required: false,
              },
            },
            {
              key: 'ManagerOfficialPhone',
              type: 'input',
              templateOptions: {
                label: '主持人辦公室電話',
                required: false,
              },
            },
            {
              key: 'ManagerCellPhone',
              type: 'input',
              templateOptions: {
                label: '主持人手機',
                required: false,
              },
            },
            {
              key: 'ManagerFAX',
              type: 'input',
              templateOptions: {
                label: '主持人傳真',
                required: false,
              },
            },
            {
              key: 'ManagerEMail',
              type: 'input',
              templateOptions: {
                label: '主持人電子郵件信箱',
                required: false,
              },
            },
            //其他人員(機動性新增)
            {
              key: 'StaffRole',
              type: 'input',
              templateOptions: {
                label: '其他人員角色',
                required: false,
              },
            },
            {
              key: 'Staff',
              type: 'input',
              templateOptions: {
                label: '其他人員姓名',
                required: false,
              },
            },
            {
              key: 'StaffPos',
              type: 'input',
              templateOptions: {
                label: '其他人員單位/職稱',
                required: false,
              },
            },
            {
              key: 'StaffAddr',
              type: 'input',
              templateOptions: {
                label: '其他人員地址',
                required: false,
              },
            },
            {
              key: 'StaffOfficialPhone',
              type: 'input',
              templateOptions: {
                label: '其他人員辦公室電話',
                required: false,
              },
            },
            {
              key: 'StaffCellPhone',
              type: 'input',
              templateOptions: {
                label: '其他人員手機',
                required: false,
              },
            },
            {
              key: 'StaffFAX',
              type: 'input',
              templateOptions: {
                label: '其他人員傳真',
                required: false,
              },
            },
            {
              key: 'StaffEMail',
              type: 'input',
              templateOptions: {
                label: '其他人員電子郵件信箱',
                required: false,
              },
            },
          ]
    },
    {
      id: 'tab3',
      label: 'Tab 3',
      model: {},
      form: new FormGroup({}),
      fields: [
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
  ];


  options: FormlyFormOptions = {};

  get activeTab() {
    return this.tabs.find(tab => tab.id === this.activeTabId);
  }

  onSubmit() {
    console.log('Form submitted'+ this.activeTabId);
    alert('Form submitted'+ this.activeTabId);
  }
}
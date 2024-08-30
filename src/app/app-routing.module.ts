/*routing的pattern如下
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/
//=================================================================
import { NgModule } from '@angular/core';
//import { CommonModule, formatDate } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent} from "./login/login.component";
import { FormComponent } from "./form/form.component";
//import { FormProtocolComponent } from "./formprotocol/formprotocol.component";
import { FormTestComponent } from "./formly/formlytest.component";
import { ProjListComponent} from "./projlist/projlist.component";
import { AppDocListComponent} from "./appdoclist/appdoclist.component";
import { ReguProjComponent} from "./reguproj/reguproj.component";
import { ReguProjDocComponent } from "./reguprojdoc/reguprojdoc.component";
//個管的
import { CaseListComponent } from "./ptcaselist/caselist.component";
import { HDocListComponent } from "./ptHDoclist/hdoclist.component";

//import { DataService } from "./form/data.service";  

const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  //{ path: 'ironman/:id', component: IronmanComponent }, 
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'form/:docid/:patternid', component: FormComponent },
  { path: 'formtest', component: FormTestComponent },
  { path: 'projlist', component: ProjListComponent },
  { path: 'appdoclist/:projid', component: AppDocListComponent },
  { path: 'reguproj', component: ReguProjComponent },
  { path: 'reguprojdoc/:regucode/:projcode', component: ReguProjDocComponent },
  //{ path: 'codebook/:codetype', component: DataService },//代碼資料
  //{ path: 'appdocedit/:docid', component: AppDocComponent },
  { path: 'ptcaselist', component: CaseListComponent },
  { path: 'pthdoclist/:clinicid/:pid', component: HDocListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule, //ReactiveFormsModule,  // 在这里导入CommonModule模块便利 pipe 使用
    //MatTabsModule, MatInputModule, MatFormFieldModule, MatSelectModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


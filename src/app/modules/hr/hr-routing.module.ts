import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrComponent } from './hr.component';
import { DesignationComponent } from './designation/designation.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
{
path: '',
component: HrComponent,
children: [
//{ path: '', component: HrComponent },
{ path: 'desgignation', component: DesignationComponent },
{ path: 'dept', component: DepartmentComponent },
],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }

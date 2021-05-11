import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { DesignationComponent } from './designation/designation.component';


@NgModule({
  declarations: [HrComponent, DesignationComponent],
  imports: [
    CommonModule,
    HrRoutingModule
  ]
})
export class HrModule { }

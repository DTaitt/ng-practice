import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterSwordComponent } from './master-sword/master-sword.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MasterSwordComponent,
  ],
  exports: [
    MasterSwordComponent,
  ]
})
export class EquipmentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './sidebar/sidebar.component';




@NgModule({
  declarations: [
    SharedComponent
  ],
  exports:[
    SharedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

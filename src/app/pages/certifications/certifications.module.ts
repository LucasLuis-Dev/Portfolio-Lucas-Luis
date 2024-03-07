import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificationsComponent } from './certifications.component';



@NgModule({
  declarations: [
    CertificationsComponent
  ],
  exports: [
    CertificationsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CertificationsModule { }

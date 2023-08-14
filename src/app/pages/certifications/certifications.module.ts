import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificationComponent } from './components/certification/certification.component';


@NgModule({
  declarations: [
    CertificationComponent
  ],
  exports: [
    CertificationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CertificationsModule { }

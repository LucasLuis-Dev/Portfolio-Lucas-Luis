import { Component } from '@angular/core';
import { certifications } from 'src/app/data/certifications.';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent {

  certifications: any[] = certifications;


}

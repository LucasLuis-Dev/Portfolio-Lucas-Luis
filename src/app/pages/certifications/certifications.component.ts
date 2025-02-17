import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { certifications } from 'src/app/data/certifications.';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit, AfterViewInit {
  certifications: any[] = certifications;
  showCertifications: boolean = false;
  

  ngOnInit(): void {
    setTimeout(() => {
      
      this.adicionarClasseSeVisivel();
    }, 0);
  }

  ngAfterViewInit(): void {
    this.showCertifications = true;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.adicionarClasseSeVisivel();
  }

  adicionarClasseSeVisivel(): void {
    let count = 0
    const elements = document.querySelectorAll('.certifications-list-item');
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;

      if (elementPosition <= window.innerHeight) {
        element.classList.add('animar');
      } else {
        element.classList.remove('animar');
      }


      count++;
    });
}}

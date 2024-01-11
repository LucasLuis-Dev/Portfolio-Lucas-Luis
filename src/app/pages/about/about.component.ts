import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.adicionarClasseSeVisivel();
  }

  adicionarClasseSeVisivel(): void {
    let count = 0
    const elements = document.querySelectorAll('.about-informations-history-timeline-outer-card-info');
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;

      if (elementPosition <= window.innerHeight) {
        element.classList.add('animar');
      } 

      count++;
    });
}
}

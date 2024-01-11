import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.adicionarClasseSeVisivel();
  }

  adicionarClasseSeVisivel(): void {
    let count = 0
    const elements = document.querySelectorAll('.skills__container');
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;

      if (elementPosition <= window.innerHeight) {
        element.classList.add('animar');
      } 

      count++;
    });
}
}

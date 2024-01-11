import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any = dataFake; 

  rotaAtual:string = '';
 
  constructor(private router: Router){
    this.rotaAtual = this.router.url;
  }
  ngOnInit(): void {
    if (this.rotaAtual == '/projects') {
      this.adicionarClasseSeVisivel()
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.adicionarClasseSeVisivel();
  }

  adicionarClasseSeVisivel(): void {
    let count = 0
    const elements = document.querySelectorAll('.projects-title');
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;

      if (this.rotaAtual == '/projects') {
        element.classList.add('animar');

      } else if (elementPosition <= window.innerHeight) {
        element.classList.add('animar');
      }

      count++;
    });
}
}

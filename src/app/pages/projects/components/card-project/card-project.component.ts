import { Component, Input, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})

export class CardProjectComponent implements OnInit {

  rotaAtual:string = '';
 
  constructor(private router: Router){
    this.rotaAtual = this.router.url;
    console.log(this.rotaAtual);
  }
 
  @Input()
  titleProject: string = '';

  @Input()
  descriptionProject: string = '';

  @Input()
  ImagesProject: Array<string> = [] ;

  @Input()
  OrderProject: string = '';

  @Input()
  ListTechsProject: Array<string> = [];

  @Input()
  WebsiteProject: string = '';

  @Input()
  CodeProject: string = '';

  photoProject: string = '';

  currentImageIndex: number = 0;

  verificaOrdemProjeto() {
    if (Number(this.OrderProject) % 2 === 0) {
      let card: Element | null = document.querySelector(`#card-${this.OrderProject}`);
      if (card) {
        card.classList.add('inverse');
        card.classList.add('right-animated');
      }
    }
  }
  changeImage() { 
   this.photoProject = this.ImagesProject[this.currentImageIndex];
   this.currentImageIndex++

   if (this.currentImageIndex >= 3) {
    this.currentImageIndex = 0;
   }

   setTimeout(() => this.changeImage(), 5000)
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.verificaOrdemProjeto();     
      this.changeImage();
      this.adicionarClasseSeVisivel();
    }, 0);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.adicionarClasseSeVisivel();
  }

  adicionarClasseSeVisivel(): void {
    let count = 0
    const elements = document.querySelectorAll('.card-project__container');
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;

      if (elementPosition <= window.innerHeight && this.rotaAtual != "/projects") {
        element.classList.add('animar');
      } 

      else if (this.rotaAtual === "/projects" && count < 2) {
        element.classList.add('normal-animation');
      }

      else if (elementPosition <= window.innerHeight && this.rotaAtual === "/projects" && count >= 2) {
        element.classList.add('animar');
      } else {
        element.classList.remove('animar');
      }

      count++;
    });
  }

  

  
}
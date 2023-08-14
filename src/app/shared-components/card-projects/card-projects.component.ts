import { Component, HostListener } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-card-projects',
  templateUrl: './card-projects.component.html',
  styleUrls: ['./card-projects.component.css']
})
export class CardProjectsComponent {
  projects: any = dataFake;
  screenWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$even'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }
}

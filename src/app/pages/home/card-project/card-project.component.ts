import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';


@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {

  projects: any = dataFake;

  ngOnInit(): void {



  }

}

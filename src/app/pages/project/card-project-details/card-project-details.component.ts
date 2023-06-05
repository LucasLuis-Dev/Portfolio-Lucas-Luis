import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-card-project-details',
  templateUrl: './card-project-details.component.html',
  styleUrls: ['./card-project-details.component.css']
})
export class CardProjectDetailsComponent implements OnInit {

  photoProject: string = '';
  projectTitle: string = '';
  projectDescription: string = '';
  projectWebsite: string = '';
  projectGithub: string = '';


  private id:string | null = "0";

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = (value['get']("id"))
      )
    console.log(this.id);
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0];

    this.photoProject = result.photo
    this.projectTitle = result.title;
    this.projectDescription = result.description
    this.projectWebsite = result.website
    this.projectGithub = result.github


  }
}

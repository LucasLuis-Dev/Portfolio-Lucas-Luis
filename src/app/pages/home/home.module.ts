import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { StacksComponent } from './components/stacks/stacks.component';
import { ButtonComponent } from 'src/app/shared-components/button/button.component';
import { CardProjectsComponent } from 'src/app/shared-components/card-projects/card-projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { TechnicalGraduationComponent } from './components/technical-graduation/technical-graduation.component';
import { FooterComponent } from 'src/app/shared-components/footer/footer.component';


import { RouterModule } from '@angular/router';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';

@NgModule({
  declarations: [
    ProfileComponent,
    StacksComponent,
    ButtonComponent,
    CardProjectsComponent,
    SkillsComponent,
    ContactComponent,
    TechnicalGraduationComponent,
    FooterComponent,
    WhoAmIComponent
  ],
  exports: [
    ProfileComponent,
    StacksComponent,
    ButtonComponent,
    CardProjectsComponent,
    SkillsComponent,
    ContactComponent,
    TechnicalGraduationComponent,
    WhoAmIComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    
  ]
})
export class HomeModule { }

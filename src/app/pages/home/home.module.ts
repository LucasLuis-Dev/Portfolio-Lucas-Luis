import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';



import { ProfileComponent } from './profile/profile.component';
import { StacksComponent } from './stacks/stacks.component';
import { TitleProjectComponent } from './title-project/title-project.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    ProfileComponent,
    StacksComponent,
    TitleProjectComponent,
    CardProjectComponent,
    ContactComponent
  ],
  exports: [
    ProfileComponent,
    StacksComponent,
    TitleProjectComponent,
    CardProjectComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }

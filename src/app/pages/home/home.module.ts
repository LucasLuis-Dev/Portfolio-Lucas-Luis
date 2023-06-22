import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';



import { ProfileComponent } from './profile/profile.component';
import { StacksComponent } from './stacks/stacks.component';
import { TitleComponent } from 'src/app/components/title/title.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    ProfileComponent,
    StacksComponent,
    CardProjectComponent,
    ContactComponent,
    TitleComponent,
  
  ],
  exports: [
    ProfileComponent,
    StacksComponent,
    CardProjectComponent,
    ContactComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class HomeModule { }

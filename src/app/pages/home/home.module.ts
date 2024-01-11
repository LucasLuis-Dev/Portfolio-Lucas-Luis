import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { StacksComponent } from './components/stacks/stacks.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';
import { SkillsComponent } from './components/skills/skills.component';



@NgModule({
  declarations: [
    ProfileComponent,
    StacksComponent,
    WhoAmIComponent,
    SkillsComponent
  ],
  exports: [
    ProfileComponent,
    StacksComponent,
    WhoAmIComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class HomeModule { }

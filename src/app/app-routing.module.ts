import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'projects', component: ProjectsComponent, pathMatch: 'full'
  },
  {
    path: 'about-me', component: AboutMeComponent, pathMatch: 'full'
  },
  {
    path: 'certifications', component: CertificationsComponent, pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

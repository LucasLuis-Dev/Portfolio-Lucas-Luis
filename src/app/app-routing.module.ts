import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { CardProjectDetailsComponent } from './pages/project/card-project-details/card-project-details.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent, pathMatch: 'full'
  },
  {
    path: 'project/:id', component: CardProjectDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

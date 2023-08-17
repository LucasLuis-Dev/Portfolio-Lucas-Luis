import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectsModule } from './pages/projects/projects.module';
import { AboutMeModule } from './pages/about-me/about-me.module';
import { RouterModule } from '@angular/router';
import { CertificationsModule } from "./pages/certifications/certifications.module";
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ButtonToTopComponent } from './shared-components/button-to-top/button-to-top.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        ProjectsComponent,
        AboutMeComponent,
        CertificationsComponent,
        ButtonToTopComponent

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HomeModule,
        ProjectsModule,
        AboutMeModule,
        AppRoutingModule,
        RouterModule,
        CertificationsModule

    ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AboutMeComponent } from 'src/app/about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path:'home', component: HomeComponent},
  {path:'aboutme', component: AboutMeComponent},
  {path:'resume', component: ResumeComponent},
  {path:'contact', component: ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutMeComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

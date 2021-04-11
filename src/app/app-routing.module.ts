import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path: 'about-me', component: AboutMeComponent, data: { animation: 'about' }
  },
  {
    path: 'contact', component: ContactComponent, data: { animation: 'contact' }
  },
  {
    path: 'portfolio', component: ProjectComponent, data: { animation: 'portfolio' }
  },
  {
    path: '', component: HomeComponent, data: { animation: 'home' }
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

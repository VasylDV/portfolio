import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ContactsComponent,
  AboutMeComponent,
  HomeComponent,
  PortfolioComponent
} from './components';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'portfolio', component: PortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

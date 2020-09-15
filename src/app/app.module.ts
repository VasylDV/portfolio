import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HamburgerDirective } from './directives/hamburger.directive';
import {
  ContactsComponent,
  HomeComponent,
  NavComponent,
  ItemNavComponent,
  InfoComponent,
  HamburgerComponent,
  AboutMeComponent,
  PortfolioComponent
} from './components';
import { MyLibModule } from '@vd/my-lib';
// import { MyLibNavComponent } from '@vd/my-lib';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ItemNavComponent,
    InfoComponent,
    HamburgerComponent,
    HamburgerDirective,
    AboutMeComponent,
    ContactsComponent,
    PortfolioComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MyLibModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }

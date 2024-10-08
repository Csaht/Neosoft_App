import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../../material/material.module';
import { PageContentComponent } from './page-content/page-content.component';
import { HeroComponent } from './hero/hero.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
 const routes:Routes=[
  { path :'', redirectTo:'/home',pathMatch:'full'},
  { path :'home', component: HeroComponent}
 ]

 const components:any=[
  PageContentComponent,
  NavComponent,
  FooterComponent,
  HeroComponent,
  NavListComponent,

 ]


@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports:[...components]
})
export class LandingModule { }

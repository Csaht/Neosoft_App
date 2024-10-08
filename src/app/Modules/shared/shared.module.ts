import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { LandingModule } from '../landing/landing/landing.module';



@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    LandingModule
  ],
  exports:[PageComponent]
})
export class SharedModule { }

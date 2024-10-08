import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Test2Component } from './test2/test2.component';
import { LandingModule } from '../landing/landing/landing.module';
import { Test3Component } from './test3/test3.component';

const routes:Routes=[
  {path:'test',component:Test2Component},
  {path:'test3',component:Test3Component}
]

@NgModule({
  declarations: [
    Test3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
  ]
})
export class TestModule { }

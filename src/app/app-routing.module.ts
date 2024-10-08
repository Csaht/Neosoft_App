import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './Modules/shared/page/page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/portal',
  //   pathMatch: 'full',
  // },
//   {
//     path: '',
//     component:  PageComponent,
//     children: [
//       {
  
//         path: 'test-module',
//         loadChildren: () =>
//           import('./Modules/test/test.module').then(
//             (m) => m.TestModule
//           ),
//       }
       

 


// ]}

{
  
  path: 'test-module',
  loadChildren: () =>
    import('./Modules/test/test.module').then(
      (m) => m.TestModule
    ),
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

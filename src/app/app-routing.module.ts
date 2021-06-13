import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { FirstComponent } from './first/first.component';

const routes: Routes = [
  // {
  //   path: 'first/:parameter',
  //   component: ExampleComponent
  // },
  // {
  //   path: '',
  //   redirectTo: '/first/1',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

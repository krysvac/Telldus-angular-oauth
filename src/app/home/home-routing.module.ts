import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeIndexComponent } from './home-index.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeIndexComponent,
    children: [
      {
        path: '',
        component: StartComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule {}

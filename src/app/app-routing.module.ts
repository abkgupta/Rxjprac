import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpracoComponent } from './rpraco/rpraco.component';

const routes: Routes = [
  {
    path: 'rpraco',
    component: RpracoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

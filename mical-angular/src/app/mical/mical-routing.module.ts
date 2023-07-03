import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicalContainerComponent } from './mical-container/mical-container.component';

const routes: Routes = [
  {
    path: '',
    component: MicalContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicalRoutingModule {}

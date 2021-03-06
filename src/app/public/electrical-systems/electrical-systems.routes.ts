import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricalSystemsComponent } from './electrical-systems.component';

export const electricalSystemRoutes: Routes = [
  {
    path: '',
    component: ElectricalSystemsComponent
  }
];

export const electricalSystemRouting = RouterModule.forChild(electricalSystemRoutes);

// @NgModule({
//   imports: [
//     RouterModule.forChild(electricalSystemRoutes)
//   ],
//   exports: [RouterModule]
// })
// export class ElectricalSystemsRoutingModule {}

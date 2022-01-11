import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorrosGlobalComponent } from './ahorros-global.component';

const routes: Routes = [{ path: '', component: AhorrosGlobalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AhorrosGlobalRoutingModule { }

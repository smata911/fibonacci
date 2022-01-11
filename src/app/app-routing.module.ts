import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorrosGlobalComponent } from './pages/ahorros-global/ahorros-global.component';

const routes: Routes = [
 // { path: 'ahorrosGlobales', loadChildren: () => import('./pages/ahorros-global/ahorros-global.module').then(m => m.AhorrosGlobalModule) }
 
{path:'ahorrosGlobales',component:AhorrosGlobalComponent },//este es 
 

 
// {path:'**',redirectTo:'', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

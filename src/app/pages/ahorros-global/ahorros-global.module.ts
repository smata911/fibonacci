import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { AhorrosGlobalRoutingModule } from './ahorros-global-routing.module';




import { MatInput, MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
   
    
  ],
  imports: [
    CommonModule,
    AhorrosGlobalRoutingModule,
    MatInputModule,
    FormsModule,
    MaterialModule,
    MatInputModule,
    MatFormFieldModule
  

    
    
    
  ]
})
export class AhorrosGlobalModule { }

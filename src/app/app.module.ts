import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './shared/componets/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






import { AhorrosGlobalComponent } from './pages/ahorros-global/ahorros-global.component';
import {  MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [//componente o direcctiva
    AppComponent,
    HeaderComponent,
    
    AhorrosGlobalComponent
   
    
  ],
  imports: [//inyertar los modulos que ya estan hechos por otra fuente
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,//para usar el header de material
    
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    

    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar'; 
import{MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';




import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

import { FormsModule } from '@angular/forms';

@NgModule({
   exports:[MatToolbarModule,MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatRadioModule,MatCardModule,FormsModule]


})
export class MaterialModule{}

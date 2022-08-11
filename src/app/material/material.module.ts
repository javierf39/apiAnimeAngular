import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports:[
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule { }

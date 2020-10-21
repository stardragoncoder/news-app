import { MatButtonModule } from '@angular/material/button';
import { PrimaryRoutingModule } from './primary-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryComponent } from './primary/primary.component';
import {MatCardModule} from '@angular/material/card'; 
import { FormsModule } from '@angular/forms';

const material=[MatCardModule, MatButtonModule]
@NgModule({
  declarations: [PrimaryComponent],
  imports: [
    CommonModule,
    PrimaryRoutingModule,
    FormsModule,
    material
  ]
})
export class PrimaryModule { }

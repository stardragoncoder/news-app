import { SecondaryRoutingModule } from './secondary-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryComponent } from './secondary/secondary.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const material=[MatCardModule, MatButtonModule]

@NgModule({
  declarations: [SecondaryComponent],
  imports: [
    CommonModule,
    SecondaryRoutingModule,
    material
  ]
})

export class SecondaryModule { }

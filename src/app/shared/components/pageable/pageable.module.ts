import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageableComponent } from './pageable.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    PageableComponent
  ],
  exports: [PageableComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PageableModule { }

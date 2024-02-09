import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { PageableModule } from 'src/app/shared/components/pageable/pageable.module';
import { ViewMenuComponent } from './view-menu/view-menu.component';


@NgModule({
  declarations: [
    MenuComponent,
    ListMenuComponent,
    ViewMenuComponent
  ],
  imports: [
    PageableModule,
    CommonModule,
    MenuRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule
  ]
})
export class MenuModule { }

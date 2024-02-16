import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { MenuResolver } from './menu.resolver';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { ViewMenuResolver } from './view-menu/view-menu.resolver';
import { NewMenuComponent } from './new-menu/new-menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    resolve: {
      menuResolver: MenuResolver
    }
  },
  {
    path: 'novo',
    component: NewMenuComponent,
  },
  {
    path: ':id',
    component: ViewMenuComponent,
    resolve: {
      viewMenuResolver: ViewMenuResolver
    }
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }

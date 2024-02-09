import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { MenuResolver } from './menu.resolver';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { ViewMenuResolver } from './view-menu/view-menu.resolver';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    resolve: {
      menuResolver: MenuResolver
    }
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

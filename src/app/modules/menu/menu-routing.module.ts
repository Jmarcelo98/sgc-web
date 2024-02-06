import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { MenuResolver } from './menu.resolver';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    resolve: {
      menuResolver: MenuResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }

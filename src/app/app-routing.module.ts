import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const SGC = "sgc/";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: SGC + 'menus',
    loadChildren: () => import('./modules/menu/menu.module').then(m => m.MenuModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

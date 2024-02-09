import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Menu } from 'src/app/core/models/interface/Menu';
import { MenuService } from 'src/app/shared/services/menu.service';

@Injectable({
  providedIn: 'root'
})
export class ViewMenuResolver implements Resolve<Menu> {

  constructor(private service: MenuService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Menu> {
    return this.service.findById(route.params.id);
  }

}

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Menu } from "../../core/models/Menu";
import { MenuService } from "../../shared/services/menu.service";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})

export class MenuResolver implements Resolve<Menu[]> {
  constructor(private service: MenuService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Menu[]> {
    return this.service.findAllByActive(true);
  }

}

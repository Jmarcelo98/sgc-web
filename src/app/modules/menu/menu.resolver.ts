import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Menu } from "../../core/models/interface/Menu";
import { MenuService } from "../../shared/services/menu.service";
import { Observable } from "rxjs";
import { Paginator } from "src/app/core/models/interface/Paginator";

@Injectable({providedIn: 'root'})

export class MenuResolver implements Resolve<Menu[]> {
  constructor(private service: MenuService) {
  }

  paginator: Paginator = {
    pageIndex: 0,
    totalElements: 0,
    pageSize: 4,
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    return this.service.findAllByActive(true, this.paginator);
  }

}

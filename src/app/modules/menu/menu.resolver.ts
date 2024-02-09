import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Menu } from "../../core/models/interface/Menu";
import { MenuService } from "../../shared/services/menu.service";
import { Observable } from "rxjs";
import { Paginator } from "src/app/core/models/interface/Paginator";
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({ providedIn: 'root' })

export class MenuResolver implements Resolve<Menu[]> {
  constructor(private service: MenuService) {
  }

  paginator: Paginator = {
    pageIndex: 0,
    totalElements: 0,
    pageSize: 5,
  }

  formFilter = new FormGroup({
    isActive: new FormControl(true, []),
    name: new FormControl(null, []),
  });


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    return this.service.getAllByFilter(this.formFilter.getRawValue(), this.paginator);
  }

}

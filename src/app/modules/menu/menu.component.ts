import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../core/models/interface/Menu';
import { Paginator } from 'src/app/core/models/interface/Paginator';
import { IPaginator } from 'src/app/shared/components/pageable/pageable.component';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private menuService: MenuService) {
    this.menus = this.activatedRoute.snapshot.data.menuResolver;
  }

  paginator: Paginator = {
    pageIndex: 0,
    totalElements: 0,
    pageSize: 5,
  }

  menus: any;

  ngOnInit(): void {
    this.paginator.pageIndex = this.menus.number;
    this.paginator.totalElements = this.menus.totalElements;
  }


  formFilter = new FormGroup({
    isActive: new FormControl(true, []),
    name: new FormControl(null, []),
  });

  search() {

    this.menuService.getAllByFilter(this.formFilter.getRawValue(), this.paginator).subscribe(res => {
      this.paginator.pageIndex = res.number;
      this.paginator.totalElements = res.totalElements;
      this.menus = res
    })

  }

  public pageClick(paginator?: IPaginator) {
    this.paginator = paginator!
    this.search();
  }

}

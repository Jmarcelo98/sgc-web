import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../../../shared/services/menu.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit{

  @Input()
  list: any

  constructor(private menuService: MenuService){}

  ngOnInit(): void {

    console.log(this.list);
    


  }

  public displayedColumns: string[] = ['name', 'acao'];

}

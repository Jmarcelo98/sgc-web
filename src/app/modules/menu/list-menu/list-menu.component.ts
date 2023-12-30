import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../shared/services/menu.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrl: './list-menu.component.css'
})
export class ListMenuComponent implements OnInit{

  list: any

  constructor(private menuService: MenuService){}

  ngOnInit(): void {
    this.menuService.findAllByActive(true).subscribe(res => { 
      this.list = res;
console.log(res);

    })
    


  }

}

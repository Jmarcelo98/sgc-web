import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../../core/models/Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menus: Menu[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.menus = this.activatedRoute.snapshot.data.menuResolver as Menu[];
  }


  formFilter = new FormGroup({
    active: new FormControl(null, []),
    name: new FormControl(null, []),
  });

  search() {

  }

}

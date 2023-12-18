import { Component } from '@angular/core';
import { MenuItemsConfig } from './menu-items.config';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Router } from '@angular/router';

interface MenuNode {
  title: string;
  routerLink?: string;
  icon?: string;
  children?: MenuNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: MenuNode[] = MenuItemsConfig;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  constructor(private router: Router) {
    this.dataSource.data = TREE_DATA;
  }

  private _transformer = (node: MenuNode, level: number) => {
    return {
      name: node.title,
      level: level,
      expandable: !!node.children && node.children.length > 0,
    };
  };

  navigateToPage(menu: ExampleFlatNode) {

    console.log('ao clicar: ',menu);
    

    var teste = TREE_DATA.filter(m => m.title === menu.name);

    console.log(teste)

    // alert(teste)
    // this.router.navigate([menu.routerLink])
  }


  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}

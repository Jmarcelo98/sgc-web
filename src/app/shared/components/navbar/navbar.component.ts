import { Component } from '@angular/core';
import { MenuItemsConfig } from './menu-items.config';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

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
  routerLink: any;
}

const TREE_DATA: MenuNode[] = MenuItemsConfig;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  title = "SGC JMSports"

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  private _transformer = (node: MenuNode, level: number) => {
    return {
      name: node.title,
      level: level,
      expandable: !!node.children && node.children.length > 0,
      routerLink: node.routerLink
    };
  };

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

  dataSource = new MatTreeFlatDataSource(this.treeControl as any, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}

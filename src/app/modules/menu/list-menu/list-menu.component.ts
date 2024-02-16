import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MenuService } from '../../../shared/services/menu.service';
import {CdkDragDrop, CdkDropList, CdkDragEnter, CdkDragMove, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit{

  @Input()
  list: any

  constructor(private menuService: MenuService){}

  @ViewChild('dropListContainer') dropListContainer?: ElementRef;

  // public items: Array<number> = [1, 2, 3, 4, 5];

  dropListReceiverElement?: HTMLElement;

  dragDropInfo?: {
    dragIndex: number;
    dropIndex: number;
  };


  ngOnInit(): void {
    console.log(this.list);
    
  }

  public displayedColumns: string[] = ['name', 'acao'];

  dragEntered(event: CdkDragEnter<number>) {
    console.log("dragEntered");
    
    const drag = event.item;
    const dropList = event.container;
    const dragIndex = drag.data;
    const dropIndex = dropList.data;

    this.dragDropInfo = { dragIndex, dropIndex };
    console.log('dragEntered', { dragIndex, dropIndex });

    const phContainer = dropList.element.nativeElement;
    const phElement = phContainer.querySelector('.cdk-drag-placeholder');

    if (phElement) {
      phContainer.removeChild(phElement);
      phContainer.parentElement?.insertBefore(phElement, phContainer);

      moveItemInArray(this.list, dragIndex, dropIndex);
    }
  }

  dragMoved(event: CdkDragMove<number>) {
    console.log("dragMoved");
    
    if (!this.dropListContainer || !this.dragDropInfo) return;

    const placeholderElement =
      this.dropListContainer.nativeElement.querySelector(
        '.cdk-drag-placeholder'
      );

    const receiverElement =
      this.dragDropInfo.dragIndex > this.dragDropInfo.dropIndex
        ? placeholderElement?.nextElementSibling
        : placeholderElement?.previousElementSibling;

    if (!receiverElement) {
      return;
    }

    receiverElement.style.display = 'none';
    this.dropListReceiverElement = receiverElement;
  }

  dragDropped(event: CdkDragDrop<number>) {
    console.log("dragDropped");
    
    if (!this.dropListReceiverElement) {
      return;
    }

    this.dropListReceiverElement.style.removeProperty('display');
    this.dropListReceiverElement = undefined;
    this.dragDropInfo = undefined;

    console.log(this.list);
    

  }

}

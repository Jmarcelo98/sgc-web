import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  formFilter = new FormGroup({
    active: new FormControl(null, []),
    name: new FormControl(null, []),
  });

  search() {
    
  }

}

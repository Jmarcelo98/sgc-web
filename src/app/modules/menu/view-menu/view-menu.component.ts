import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private menuService: MenuService) {
    this.menu = this.activatedRoute.snapshot.data.viewMenuResolver;
  }

  formView = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    dateCreated: new FormControl(null, [Validators.required]),
    dateUpdate: new FormControl(new Date(), []),
    isActive: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    sort: new FormControl(null, [Validators.required]),
  });

  clickEdit = false

  ngOnInit(): void {

    this.patchForm(this.menu)
    this.disabledForm();

  }

  enableEdit() {
    this.clickEdit = true
    this.formView.controls['name'].enable();
  }

  cancelEdit() {
    this.clickEdit = false;
    this.disabledForm();
    this.ngOnInit();
  }

  menu: any

  public displayedColumns: string[] = ['name', 'acao'];

  disabledForm() {
    this.formView.controls['name'].disable();
    this.formView.controls['isActive'].disable();
  }

  update() {

    if(this.formView.valid) {

      this.formView.controls['dateUpdate'].setValue(new Date())

      this.menuService.update(this.formView.getRawValue()).subscribe( res => {
        
        window.location.reload()

      }, err => {
        console.log(err);
        
      })

    }    

  }

  patchForm(form: any) {
    this.formView.patchValue(form)
  }

}

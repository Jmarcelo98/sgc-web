import { Injectable } from '@angular/core';
import { BaseService } from './BaseService';
import { HttpClient } from '@angular/common/http';
import { Paginator } from 'src/app/core/models/interface/Paginator';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends BaseService {

  constructor(private http: HttpClient) {
    super('/menu')
  }

  findAllByActive(isActive: boolean, paginator: Paginator) {
    var params = this.setPageToHttpParam(paginator)
    return this.http.get<any>(`${this.endPoint}/${isActive}`, {params: params})
  }
}

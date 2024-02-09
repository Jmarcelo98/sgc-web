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
    return this.http.get<any>(`${this.endPoint}/active/${isActive}`, { params: params })
  }

  getAllByFilter(form: any, paginator: Paginator) {
    var params = this.setPageToHttpParam(paginator)
    return this.http.post<any>(`${this.endPoint}/filter`, form, { params: params })
  }

  findById(id: number) {
    return this.http.get<any>(`${this.endPoint}/${id}`)
  }

}

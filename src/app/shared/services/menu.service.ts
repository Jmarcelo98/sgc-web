import { Injectable } from '@angular/core';
import { BaseService } from './BaseService';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends BaseService {

  constructor(private http: HttpClient) {
    super('/menu')
  }

  findAllByActive(isActive: boolean) {
    return this.http.get<any>(`${this.endPoint}/${isActive}`)
  }
}

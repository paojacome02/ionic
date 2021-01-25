import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ColorsResponse} from '../model/color.model';
import {Endpoints} from '../../environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(private http:HttpClient) { }

  getColors(): Observable<ColorsResponse>{
    return this.http.get<ColorsResponse>(Endpoints.colors);
  }
}

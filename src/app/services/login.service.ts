import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { LogInRequest, LogInResponse } from '../model/login.model';
import {Endpoints} from 'src/environments/endpoints'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
  login(data: LogInRequest): Observable<LogInResponse>{
    return this.http.post<LogInResponse>(Endpoints.login,data);
  }
}

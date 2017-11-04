import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Company} from "./company.model";

@Injectable()
export class CompanyService {

  private API_URL = 'http://localhost:3000/api';
  constructor(private _http: HttpClient) { }

  getCompanies():Observable<Company[]>{
    return this._http.get(`${this.API_URL}/companies`);
  }
  createCompany(companyParams) : Observable<Company>{
    return this._http.post(`${this.API_URL}/companies`,companyParams);
  }

}

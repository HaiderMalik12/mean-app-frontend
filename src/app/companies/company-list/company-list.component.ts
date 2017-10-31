import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../company.service";
import {Company} from "../company.model";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];

  constructor(private _companyService: CompanyService) {
    this._companyService
      .getCompanies()
      .subscribe(companies => {
        this.companies = companies;
        console.log(this.companies);
      }, err => {
        console.error(err);
      })
  }

  ngOnInit() {
  }

}

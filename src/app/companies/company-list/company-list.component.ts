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

  }

  ngOnInit() {
    this._companyService
      .getCompanies()
      .subscribe(companies => {
        this.companies = companies;
        console.log(this.companies);
      }, err => {
        console.error(err);
      })
  }

  deleteCompany(company: Company) {

    if (confirm(`Do you want to delete the ${company.name}`)) {

      let index = this.companies.indexOf(company);
      this.companies.splice(index, 1);
      this._companyService
        .deleteCompany(company._id)
        .subscribe(rsp => {
          console.log(rsp);
        }, err => {
          this.companies.splice(index,0, company);
          console.log(err);
        })
    }
  }
}

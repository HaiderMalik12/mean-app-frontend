import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  companyForm: FormGroup;

  constructor(private _fb: FormBuilder,
              private _companyService: CompanyService) {
  }

  ngOnInit() {
    this.initForm();
  }

  submitForm() {
    console.log(this.companyForm.value);

    let companyParams = {
      name: this.companyForm.get('name').value,
      city: this.companyForm.get('city').value,
      address: this.companyForm.get('address').value,
    };
    this.createCompany(companyParams);
  }

  private createCompany(companyParams) {
    this._companyService
      .createCompany(companyParams)
      .subscribe(company => {
        console.log(company);
      }, err => {
        console.log(err);
      })
  }

  private initForm() {
    this.companyForm = this._fb.group({
      name: '',
      city: '',
      address: ''
    });
  }

}

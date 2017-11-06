import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CompanyService} from "../company.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  companyForm: FormGroup;
  processing: boolean = false;

  constructor(private _fb: FormBuilder,
              private _companyService: CompanyService,
              private _router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  submitForm() {

    if(this.companyForm.valid) {
      let companyParams = {
        name: this.companyForm.get('name').value,
        city: this.companyForm.get('city').value,
        address: this.companyForm.get('address').value,
      };
      this.createCompany(companyParams);
    }
  }

  cancel(){
    this.companyForm.reset();
    this._router.navigate(['companies']);
  }
  private createCompany(companyParams) {
    this.processing = true;
    this._companyService
      .createCompany(companyParams)
      .subscribe(company => {
        console.log(company);
        this.processing = false;
        this._router.navigate(['companies']);
      }, err => {
        console.log(err);
      })
  }

  private initForm() {
    this.companyForm = this._fb.group({
      name: ['', Validators.required],
      city: '',
      address: ''
    });
  }

}

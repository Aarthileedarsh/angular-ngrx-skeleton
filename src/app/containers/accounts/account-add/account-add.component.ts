import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/models';

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.sass']
})
export class AccountAddComponent implements OnInit {

  accountForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", Validators.required],
    })
  }

  createAccount() {
    const newAccount: Account = {
      firstname: this.accountForm.get("firstname").value,
      lastname: this.accountForm.get("lastname").value,
      email: this.accountForm.get("email").value,
    }

    this.accountForm.reset();
  }


}

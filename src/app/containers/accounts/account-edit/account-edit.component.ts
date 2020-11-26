import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.sass']
})
export class AccountEditComponent implements OnInit {

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

    const account$: Observable<Account> = null;

    account$.subscribe(currentAccount => {
      if(currentAccount){
        this.accountForm.patchValue({
          firstname: currentAccount.firstname,
          lastname: currentAccount.lastname,
          email: currentAccount.email
        });
      }
    })
  }

  updateAccount() {
    const updatedAccount: Account = {
      firstname: this.accountForm.get("firstname").value,
      lastname: this.accountForm.get("lastname").value,
      email: this.accountForm.get("email").value,
    }

    this.accountForm.reset();
  }

}

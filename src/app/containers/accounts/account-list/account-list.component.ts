import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.sass']
})
export class AccountListComponent implements OnInit {

  accounts$: Observable<Account[]>;
  error$: Observable<String>;

  constructor() { }

  ngOnInit(): void {

  }

  deleteAccount(account: Account) {
    if(confirm("Are you sure you want to delete the line ?")){
    }
  }

  editAccount(account: Account) {
  }
}

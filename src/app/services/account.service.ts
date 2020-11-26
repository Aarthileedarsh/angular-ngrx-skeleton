import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { Account } from "../models/account.model";


@Injectable({
  providedIn: "root"
})
export class AccountService {
  private accountsUrl = environment.apiBaseUrl+'accounts';

  constructor(private http: HttpClient) {}

  getAccountes(): Observable<any> {
    return this.http.get<Account[]>(this.accountsUrl);
  }

  getAccountById(payload: number): Observable<Account> {
    return this.http.get<Account>(`${this.accountsUrl}/${payload}`);
  }

  createAccount(payload: Account): Observable<Account> {
    return this.http.post<Account>(this.accountsUrl, payload);
  }

  updateAccount(account: Account): Observable<Account> {
    return this.http.patch<Account>(
      `${this.accountsUrl}/${account.id}`,
      account
    );
  }

  deleteAccount(payload: number) {
    return this.http.delete(`${this.accountsUrl}/${payload}`);
  }
}
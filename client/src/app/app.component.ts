import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AccountService} from "./shared/services/account.service";
import {User} from "./core/models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService) {
  }
  ngOnInit() {
    this.setCurrentUser();
  }

  private setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user') as string);
    if (user) {
      this.accountService.setCurrentUser(user);
    }
  }
}

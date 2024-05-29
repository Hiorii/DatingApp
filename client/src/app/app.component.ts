import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get('https://localhost:7022/api/users').subscribe({
      next: data => this.users = data,
      error: error => console.error('There was an error!', error),
      complete: () => console.log('Completed')
    })
  }
}

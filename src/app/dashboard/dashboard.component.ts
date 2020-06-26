import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  btnString = 'Shorter';
  url = '';
  urlShort = '';
  constructor() { }

  ngOnInit(): void {
  }

  shorter() {
    if (this.btnString === 'Shorter') {
      this.btnString = 'Reset';
    } else {
      this.btnString = 'Shorter';
      this.urlShort = '';
      this.url = '';
    }
  }

}

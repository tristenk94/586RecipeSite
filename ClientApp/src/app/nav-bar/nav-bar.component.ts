import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '../app.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(
    public oktaAuth: OktaAuthService,
    public router: Router) { }

  ngOnInit(): void {
    this.oktaAuth.$isAuthenticated.subscribe(val => this.isAuthenticated = val);
  }

}

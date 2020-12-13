import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { OktaAuthService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipeSite';
  isAuthenticated: boolean;

  public constructor(
    private titleService: Title,
  public oktaAuth: OktaAuthService) { }

  ngOnInit(): void  {
    this.titleService.setTitle('Recipe Site Epic');
    this.oktaAuth.$isAuthenticated.subscribe(val => this.isAuthenticated = val);
  }
}

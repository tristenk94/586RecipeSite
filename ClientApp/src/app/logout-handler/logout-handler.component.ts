import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout-handler',
  templateUrl: './logout-handler.component.html',
  styleUrls: ['./logout-handler.component.css']
})
export class LogoutHandlerComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private doc: Document, public auth: AuthService) { }

  ngOnInit() {
  }

  login(): void {
    // Call this to redirect the user to the login page
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}

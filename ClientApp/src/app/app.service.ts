import { Observable, Observer } from 'rxjs';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuth } from '@okta/okta-auth-js';



@Injectable({ providedIn: 'root' })
export class OktaAuthService {
  //userName: string; //save tje username for later use

  // IMPORTANT!
  // Replace {clientId} with your actual Client ID
  // Replace {yourOktaDomain} with your actual Okta domain
  // If using a custom authorization server, ISSUER should be 'https://{yourOktaDomain}/oauth2/${authServerId}'

  CLIENT_ID = '0oa29o7w9qeYNCarq5d6';
  ISSUER = 'https://dev-5464195.okta.com'
  LOGIN_REDIRECT_URI = 'https://localhost:44334/callback';
  LOGOUT_REDIRECT_URI = 'https://localhost:44334/';

  oktaAuth = new OktaAuth({
    clientId: this.CLIENT_ID,
    issuer: this.ISSUER,
    redirectUri: this.LOGIN_REDIRECT_URI,
    pkce: true
  });

  $isAuthenticated: Observable<boolean>;
  private observer: Observer<boolean>;
  constructor(private router: Router) {
    this.$isAuthenticated = new Observable((observer: Observer<boolean>) => {
      this.observer = observer;
      this.isAuthenticated().then(val => {
        observer.next(val);
      });
    });
  }

  async isAuthenticated() {

     // Checks if there is a current accessToken in the TokenManger.
    return !!(await this.oktaAuth.tokenManager.get('accessToken'));
  }

  login(originalUrl) {
    // Save current URL before redirect
    sessionStorage.setItem('okta-app-url', originalUrl || this.router.url);

    // Launches the login redirect.
    this.oktaAuth.token.getWithRedirect({
      scopes: ['openid', 'email', 'profile']
    });
  }

  async handleAuthentication() {
    const tokenContainer = await this.oktaAuth.token.parseFromUrl();

    this.oktaAuth.tokenManager.add('idToken', tokenContainer.tokens.idToken);
    this.oktaAuth.tokenManager.add('accessToken', tokenContainer.tokens.accessToken);

    if (await this.isAuthenticated()) {
      this.observer.next(true);
    }
    /*
    // returns an object with user's claims
    const userClaims = await this.oktaAuth.getUser(this.oktaAuth.tokenManager.get('accessToken'), this.oktaAuth.tokenManager.get('idToken'));

    // user name is exposed directly as property
   // this.userName = userClaims.name; //saving it for later use within the application
    sessionStorage.setItem('userName', userClaims.name);*/


    // Retrieve the saved URL and navigate back
    const url = sessionStorage.getItem('okta-app-url');
    this.router.navigateByUrl(url);
  }

  /*  async getInfo() {
     
    }*/
  async logout() {

    await this.oktaAuth.signOut({
      postLogoutRedirectUri: this.LOGOUT_REDIRECT_URI
    });

   
  }
}

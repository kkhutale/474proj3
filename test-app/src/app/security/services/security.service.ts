import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SecurityService {
   private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private _http: Http,private _userSvc: UserService) { }

  public login(userName: string, password: string) {
    return this._http.post('http://localhost:3000/api/auth/login', {email: userName, password: password}, {headers: this.headers})
        .map(user => {
          this._userSvc.setUser(user.json());
          return user.json();
        });
  }

}

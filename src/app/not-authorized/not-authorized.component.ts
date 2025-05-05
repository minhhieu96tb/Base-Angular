import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserManager } from 'oidc-client';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthorizeService } from '../auth/authorize.service';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrls: ['./not-authorized.component.scss'],
})
export class NotAuthorizedComponent implements OnInit {
  userManager: UserManager = new UserManager({});
  messages: any;
  constructor(
    private location: Location,
    private _router: Router,
    private _authorize: AuthService
  ) {}

  ngOnInit(): void {
    const settings = {
      authority: environment.AUTHORITY_URI,
      client_id: environment.CLIENT_ID,
      redirect_uri: `${environment.LOGIN_REDIRECT_URL}assets/signin-callback.html`,
      silent_redirect_uri: `${environment.API_BASE_URL}assets/silent-callback.html`,
      post_logout_redirect_uri: `${environment.POST_LOGOUT_REDIRECT_URL}`,
      scope: environment.SCOPE
    };
    this.userManager = new UserManager(settings);
    this._authorize.getCurrentUser().subscribe((response:any) => {
      this.messages =  response?.messages ? response?.messages[0]?.message : null;
    }, (error: any) => {
      if(error?.messages[0].message){
        this.messages = error?.messages ? error?.messages[0] : null;
      }
      else {
        this.messages = {
          title: "Đã có lỗi không xác định",
          message: "Vui lòng đăng nhập lại"
        }
      }
    });
  }

  directBack() {
    this.location.back();
  }

  login(): void {
    this.userManager.signoutRedirect();
    this._router.navigate(['/admin/manage/all/1']);
  }
}

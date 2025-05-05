import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthorizeService } from './authorize.service';
import { catchError, mergeMap } from 'rxjs/operators';
import { ErrorResponseMessages } from './api-authorization.constants';
import { MessageType, ResponseMessage, ResponseMessageDto } from '../@core/dto/response-message-dto';
@Injectable({
  providedIn: 'root'
})
export class AuthorizeInterceptor implements HttpInterceptor {
  constructor(private authorize: AuthorizeService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authorize.getAccessToken()
      .pipe(mergeMap(token => this.processRequestWithToken(token, req, next)));
  }
  private _getLanguage(){
		return localStorage.getItem('lang') ? `${localStorage.getItem('lang')};q=0.9,${localStorage.getItem('lang')};q=0.8` : 'en-US,en;q=0.9,vi;q=0.8';
	}

  // Checks if there is an access_token available in the authorize service
  // and adds it to the request in case it's targeted at the same origin as the
  // single page application.
  private processRequestWithToken(token: string, req: HttpRequest<any>, next: HttpHandler) {
    if (!!token ) {
      // var header = {
      //   Authorization: `Bearer ${token}`
      // };
      // header["Accept-Language"] = "vi";
      // req = req.clone({
      //   setHeaders: header
      // });
      const lang = this._getLanguage();
      const header =  `Bearer ${token}`;
      const headers = new HttpHeaders({
        //set authorization
        'Authorization': header,
        //set language
        'Accept-Language': 'vi',
        "X-Time-Zone": Intl.DateTimeFormat()?.resolvedOptions()?.timeZone,
        //set content type - logout
        // 'Content-Type': url.includes('connect/revocation') ? 'application/x-www-form-urlencoded' : 'application/json',
      });

      if(req?.url?.includes('AWSAccessKeyId') || req?.url?.includes('r2.cloudflarestorage.com')){
        req = req;
      }else{
        req = req.clone({ headers });
      }
      //  console.log(req, 'req')
    }
    return next.handle(req).pipe(
      catchError((error) => {
        var response = new ResponseMessageDto();
        response.messages = new Array<ResponseMessage>();

        const newResponseMessage: ResponseMessage = {
          messageType: error?.error.messageType,
          message: error?.error.message,
          title: error?.error.title,
          item: error?.error.item
        };

        var messages = new Array<ResponseMessage>(
          newResponseMessage
        );

        if(error.status == 400) {
          if(messages != null && messages?.length > 0) {
            response.messages = messages;
          }
          else
          {
            var responseMessage = new ResponseMessage();
            responseMessage.message = error.error.message            ;
            responseMessage.messageType = MessageType.Error;
            response.messages.push(responseMessage);
          }
        } else if (error.status == 401) {
          if(messages != null && messages?.length > 0) {
            response.messages = messages;
          }
          else
          {
            var responseMessage = new ResponseMessage();
            responseMessage.message = ErrorResponseMessages[401];
            responseMessage.messageType = MessageType.Error;
            response.messages.push(responseMessage);
          }
        } else if (error.status == 403) {
          if(messages != null && messages?.length > 0) {
            response.messages = messages;
          }
          else
          {
            var responseMessage = new ResponseMessage();
            responseMessage.message = ErrorResponseMessages[403];
            responseMessage.messageType = MessageType.Error;
            response.messages.push(responseMessage);
          }
        } else if (error.status == 404) {
          if(messages != null && messages?.length > 0) {
            response.messages = messages;
          }
          else
          {
            var responseMessage = new ResponseMessage();
            responseMessage.message = ErrorResponseMessages[404];
            responseMessage.messageType = MessageType.Error;
            response.messages.push(responseMessage);
          }
        } else if (error.status == 409) {
          if(messages != null && messages?.length > 0) {
            response.messages = messages;
          }
          else
          {
            var responseMessage = new ResponseMessage();
            responseMessage.message = ErrorResponseMessages[409];
            responseMessage.messageType = MessageType.Error;
            response.messages.push(responseMessage);
          }
        } else if (error.status == 500) {
          if(messages != null && messages?.length > 0) {
            response.messages = messages;
          }
          else
          {
            var responseMessage = new ResponseMessage();
            responseMessage.message = ErrorResponseMessages[500];
            responseMessage.messageType = MessageType.Error;
            response.messages.push(responseMessage);
          }
        }
         else {
          if(messages != null && messages?.length > 0) {
            response.messages = messages;
          }
          else
          {
            var responseMessage = new ResponseMessage();
            responseMessage.message = ErrorResponseMessages.Default;
            responseMessage.messageType = MessageType.Error;
            response.messages.push(responseMessage);
          }
        }
        return throwError(response);
      }));
  }
}

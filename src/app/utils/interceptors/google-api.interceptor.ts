import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from './../../../environments/environment';

@Injectable()
export class GoogleApiinterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authenticatedRequest = request.clone({
      setParams: {
        'key': environment.gcloud.apiKey,
      },
    });
    return next.handle(authenticatedRequest);
  }
}

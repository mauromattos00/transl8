import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GoogleApiinterceptor } from './google-api.interceptor';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: GoogleApiinterceptor,
    multi: true,
  },
];

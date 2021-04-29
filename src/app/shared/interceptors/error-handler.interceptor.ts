import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError(errorResponse => {
        switch (errorResponse.status) {
          case 500:
            alert(JSON.stringify(errorResponse.error));
            break;
          default: {
            if (!errorResponse.error) {
              alert(JSON.stringify(errorResponse.error));
              break;
            }
            alert('Ocorreu um erro.');
          }
        }

        return throwError(errorResponse);
      }));
  }
}

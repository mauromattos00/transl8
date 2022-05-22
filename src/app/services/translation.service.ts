import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { TranslateTextRequest } from './../interfaces/translate-text-request';
import { GoogleApiResponse } from '../interfaces/google-api-response';
import { TranslateTextResponse } from '../interfaces/translate-text-response';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private http: HttpClient) { }

  public translateText(req: TranslateTextRequest): Observable<GoogleApiResponse<TranslateTextResponse>> {
    const params = new HttpParams()
      .append('q', req.query)
      .append('target', req.target)

    return this.http.post<GoogleApiResponse<TranslateTextResponse>>(
      `${environment.gcloud.baseUrl}`,
      null,
      { params }
    );
  }
}

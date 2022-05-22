import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GoogleApiResponse } from '../interfaces/google-api-response';
import { environment } from './../../environments/environment.prod';
import { LanguageListResponse } from '../interfaces/language-list-response';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private http: HttpClient) { }

  public getLanguageList(): Observable<GoogleApiResponse<LanguageListResponse>> {
    const params = new HttpParams()
      .append('target', 'pt')
    return this.http.get<GoogleApiResponse<LanguageListResponse>>(
      `${environment.gcloud.baseUrl}/languages`,
      { params },
    );
  }
}

import { TranslationService } from './services/translation.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppStoreModule } from './store/store.module';
import { httpInterceptorProviders } from './utils/interceptors';
import { LanguageService } from './services/language.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppStoreModule,
  ],
  providers: [
    httpInterceptorProviders,
    LanguageService,
    TranslationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

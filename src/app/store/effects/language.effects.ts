import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, pluck } from 'rxjs';

import * as languageActions from '../actions/language.actions';
import { LanguageService } from './../../services/language.service';
import { Language } from '../../interfaces/language';


@Injectable()
export class LanguageEffects {
  loadLanguages$ = createEffect(() => this.actions$.pipe(
    ofType(languageActions.loadLanguages),
    mergeMap(() => this.languageService.getLanguageList().pipe(
      pluck('data', 'languages'),
      map((languageList: Language[]) => languageActions.loadLanguagesSuccess({ languageList })),
      catchError(() => of(languageActions.loadLanguagesFailure({
        error: 'Não foi possível recuperar lista de idiomas',
      }))),
    ))),
  );

  constructor(
    private actions$: Actions,
    private languageService: LanguageService,
  ) { }
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, pluck, catchError, of } from 'rxjs';
import * as translationActions from '../actions/translation.actions';
import { TranslationService } from './../../services/translation.service';
import { Translation } from './../../interfaces/translation';

@Injectable()
export class TranslationEffects {
  translateText$ = createEffect(() => this.actions$.pipe(
    ofType(translationActions.TranslateText),
    mergeMap((value) => this.translationService.translateText({ query: value.query, target: value.target }).pipe(
      pluck('data', 'translations'),
      map((translationList: Translation[]) => translationActions.TranslateTextSuccess({ translationList })),
      catchError(() => of(translationActions.TranslateTextFailure({
        error: 'Não foi possível recuperar traduções.'
      }))),
    )),
  ));

  constructor(
    private actions$: Actions,
    private translationService: TranslationService,
  ) { }
}

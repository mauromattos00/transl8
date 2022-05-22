import { createAction, props } from '@ngrx/store';
import { Translation } from './../../interfaces/translation';

export const TranslateText = createAction(
  '[Translation] Translate Text',
  props<{ query: string, target: string }>()
);

export const TranslateTextSuccess = createAction(
  '[Translation] Translate Text Success',
  props<{ translationList: Translation[] }>()
);

export const TranslateTextFailure = createAction(
  '[Translation] Translate Text Failure',
  props<{ error: string }>()
);

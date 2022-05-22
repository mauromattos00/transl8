import { Action, createReducer, on } from '@ngrx/store';
import { Translation } from './../../interfaces/translation';
import * as translationActions from '../actions/translation.actions';

export const translationFeatureKey = 'translation';

export interface TranslationState {
  translationList: Translation[] | null;
  loading: boolean;
  error: string | null;
}

export const initialState: TranslationState = {
  translationList: null,
  loading: false,
  error: null,
};

export const translationReducer = createReducer(
  initialState,
  on(translationActions.TranslateText, (state: TranslationState) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(translationActions.TranslateTextSuccess, (state: TranslationState, { translationList }) => ({
    loading: false,
    error: null,
    translationList,
  })),
  on(translationActions.TranslateTextFailure, (state: TranslationState, { error }) => ({
    loading: false,
    error,
    translationList: null,
  })),
);

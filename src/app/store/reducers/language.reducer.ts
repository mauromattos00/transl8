import { Action, createReducer, on } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import * as LanguageActions from '../actions/language.actions';
import { Language } from './../../interfaces/language';

export const languageFeatureKey = 'language';

export interface LanguageState {
  languageList: Language[];
  loading: boolean;
  error: any;
}

export const initialState: LanguageState = {
  languageList: [],
  loading: false,
  error: null,
};

export const languageReducer = createReducer(
  initialState,
  on(LanguageActions.loadLanguages, (state: LanguageState) => {
    return {
      ...state,
      loading: true,
      error: null
    };
  }),
  on(LanguageActions.loadLanguagesSuccess, (state, { languageList }) => ({
    ...state,
    languageList,
    loading: false,
    error: null,
  })
  ),
);

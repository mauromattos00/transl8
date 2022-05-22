import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromLanguage from './language.reducer';
import * as fromTranslation from './translation.reducer';
import * as fromHistory from './history.reducer';


export interface AppState {
  language: fromLanguage.LanguageState,
  translation: fromTranslation.TranslationState,
  history: fromHistory.HistoryState,
}

export const reducers: ActionReducerMap<AppState> = {
  language: fromLanguage.languageReducer,
  translation: fromTranslation.translationReducer,
  history: fromHistory.historyReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

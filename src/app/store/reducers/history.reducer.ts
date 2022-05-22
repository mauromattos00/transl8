import { Action, createReducer, on } from '@ngrx/store';
import * as historyActions from '../actions/history.actions';

export const historyFeatureKey = 'history';

export interface HistoryState {
  terms: string[];
}

export const initialState: HistoryState = {
  terms: [],
};

export const historyReducer = createReducer(
  initialState,
  on(historyActions.AddToHistory, (state: HistoryState, { term }) => ({
    ...state,
    terms: [
      ...state.terms,
      term,
    ],
  })),
  on(historyActions.ClearHistory, (state: HistoryState) => ({
    ...state,
    terms: [],
  })),
);

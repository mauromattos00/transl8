import { createAction, props } from '@ngrx/store';

export const AddToHistory = createAction(
  '[History] Add to history',
  props<{ term: string }>()
);

export const ClearHistory = createAction(
  '[History] Clear'
);

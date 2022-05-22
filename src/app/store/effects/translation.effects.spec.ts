import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TranslationEffects } from './translation.effects';

describe('TranslationEffects', () => {
  let actions$: Observable<any>;
  let effects: TranslationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TranslationEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TranslationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

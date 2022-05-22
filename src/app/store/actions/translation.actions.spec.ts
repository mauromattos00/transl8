import * as fromTranslation from './translation.actions';

describe('''Translations', () => {
  it('should return an action', () => {
    expect(fromTranslation.''Translations().type).toBe('[Translation] '' Translations');
  });
});

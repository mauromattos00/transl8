import * as fromLanguage from './language.actions';

describe('loadLanguages', () => {
  it('should return an action', () => {
    expect(fromLanguage.loadLanguages().type).toBe('[Language] Load Languages');
  });
});

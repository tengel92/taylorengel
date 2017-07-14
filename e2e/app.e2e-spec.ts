import { TaylorengelPage } from './app.po';

describe('taylorengel App', () => {
  let page: TaylorengelPage;

  beforeEach(() => {
    page = new TaylorengelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

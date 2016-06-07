import { HomeAccountantPage } from './app.po';

describe('home-accountant App', function() {
  let page: HomeAccountantPage;

  beforeEach(() => {
    page = new HomeAccountantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('home-accountant works!');
  });
});

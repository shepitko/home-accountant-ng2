export class HomeAccountantPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('home-accountant-app h1')).getText();
  }
}

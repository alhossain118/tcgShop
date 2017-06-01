import { browser, by, element } from 'protractor';

export class TcgShopPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tcg-root h1')).getText();
  }
}

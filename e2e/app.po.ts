import { browser, element, by } from 'protractor';

export class MyApp3Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('acme-root h1')).getText();
  }
}

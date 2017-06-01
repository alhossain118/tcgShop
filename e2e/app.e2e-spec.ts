import { TcgShopPage } from './app.po';

describe('tcg-shop App', () => {
  let page: TcgShopPage;

  beforeEach(() => {
    page = new TcgShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tcg works!');
  });
});

import { Ng2sitioPage } from './app.po';

describe('ng2sitio App', function() {
  let page: Ng2sitioPage;

  beforeEach(() => {
    page = new Ng2sitioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

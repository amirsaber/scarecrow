import { ScarecrowPage } from './app.po';

describe('scarecrow App', () => {
  let page: ScarecrowPage;

  beforeEach(() => {
    page = new ScarecrowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

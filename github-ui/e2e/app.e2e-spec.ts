import { GithubUiPage } from './app.po';

describe('github-ui App', () => {
  let page: GithubUiPage;

  beforeEach(() => {
    page = new GithubUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ForumPage } from './app.po';

describe('forum App', () => {
  let page: ForumPage;

  beforeEach(() => {
    page = new ForumPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

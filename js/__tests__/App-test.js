jest.unmock('App');

import App from 'App';

describe('App', () => {
  it('should return a function', () => {
    expect(App).toEqual(expect.any(Function));
  });
});

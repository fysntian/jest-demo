import foo from './app';

describe('App', () => {
  it('Test 1', async () => {
    await foo();
    expect(true);
  });
});

describe('theBaseImageURL', () => {
  const NODE_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...NODE_ENV };
  });

  afterAll(() => {
    process.env = NODE_ENV;
  });

  context('with production', () => {
    it('return URL', async () => {
      process.env.NODE_ENV = 'production';
      const { theBaseImageURL } = (await import('src/utils/static'));

      expect(theBaseImageURL).toEqual('https://davidyang2149.github.io/MyBakingRecipeVol2/static/css/');
    });
  });

  context('with development', () => {
    it('return URL', async () => {
      process.env.NODE_ENV = 'development';
      const { theBaseImageURL } = (await import('src/utils/static'));

      expect(theBaseImageURL).toEqual('http://localhost:9092/');
    });
  });
});

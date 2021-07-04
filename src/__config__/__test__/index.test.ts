/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable global-require */

describe('config', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  context('with production & development', () => {
    it('production env', () => {
      process.env.NODE_ENV = 'production';

      const config = require('src/__config__/index').default;

      expect(config.status).toBe('production');
    });

    it('development env', () => {
      process.env.NODE_ENV = 'development';

      const config = require('src/__config__/index').default;

      expect(config.status).toBe('development');
    });
  });
});

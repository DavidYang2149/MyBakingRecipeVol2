/* eslint-disable @typescript-eslint/unbound-method */

import { saveItem, loadItem } from 'src/utils/storage';

describe('storage', () => {
  jest.spyOn(window.sessionStorage.__proto__, 'setItem');
  jest.spyOn(window.sessionStorage.__proto__, 'getItem');

  beforeEach(() => {
    Storage.prototype.setItem = jest.fn();
    Storage.prototype.getItem = jest.fn();
  });

  describe('saveItem', () => {
    it('calls sessionStorage setItem', () => {
      saveItem('key', 'value');

      expect(sessionStorage.setItem).toBeCalledWith('key', 'value');
    });
  });

  describe('loadItem', () => {
    it('calls sessionStorage getItem', () => {
      loadItem('key');

      expect(sessionStorage.getItem).toBeCalledWith('key');
    });
  });
});

/* eslint-disable @typescript-eslint/unbound-method */

import { saveItem, loadItem, removeItem } from 'src/utils/storage';

describe('storage', () => {
  jest.spyOn(window.sessionStorage.__proto__, 'setItem');
  jest.spyOn(window.sessionStorage.__proto__, 'getItem');
  jest.spyOn(window.sessionStorage.__proto__, 'removeItem');

  beforeEach(() => {
    Storage.prototype.setItem = jest.fn();
    Storage.prototype.getItem = jest.fn();
    Storage.prototype.removeItem = jest.fn();
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

  describe('removeItem', () => {
    it('calls sessionStorage removeItem', () => {
      removeItem('key');

      expect(sessionStorage.removeItem).toBeCalledWith('key');
    });
  });
});

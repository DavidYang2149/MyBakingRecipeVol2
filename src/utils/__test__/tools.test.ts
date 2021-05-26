import {
  isEmpty,
  isNotEmpty,
  isMatch,
  isNotMatch,
  splitReturnFirst,
} from 'src/utils/tools';

describe('isEmpty', () => {
  context('with empty value', () => {
    it('return true', () => {
      expect(isEmpty(0)).toBe(true);
    });
  });

  context('with not empty value', () => {
    it('return false', () => {
      expect(isEmpty(1)).toBe(false);
    });
  });
});

describe('isNotEmpty', () => {
  context('with empty value', () => {
    it('return false', () => {
      expect(isNotEmpty(0)).toBe(false);
    });
  });

  context('with not empty value', () => {
    it('return true', () => {
      expect(isNotEmpty(1)).toBe(true);
    });
  });
});

describe('isMatch', () => {
  context('with match value', () => {
    it('return true', () => {
      expect(isMatch('1')('1')).toBe(true);
    });
  });

  context('with no match value', () => {
    it('return false', () => {
      expect(isMatch('1')('2')).toBe(false);
    });
  });
});

describe('isNotMatch', () => {
  context('with match value', () => {
    it('return false (reverse result)', () => {
      expect(isNotMatch('1')('1')).toBe(false);
    });
  });

  context('with no match value', () => {
    it('return true (reverse result)', () => {
      expect(isNotMatch('1')('2')).toBe(true);
    });
  });
});

describe('splitReturnFirst', () => {
  it('return first result', () => {
    expect(splitReturnFirst('test@email.com')('@')).toBe('test');
  });
});

import { auth } from 'src/services/firebase/firebase';
import { postUserLogin, postUserLogout } from 'src/services/user/user';

describe('postUserLogin', () => {
  const result = {
    user: {
      email: 'testman@test.com',
    },
  };

  beforeEach(() => {
    auth.signInWithPopup = jest.fn().mockResolvedValue(result);
  });

  it('email returns after user login', async () => {
    const { user } = await postUserLogin();

    expect(user?.email).toBe('testman@test.com');
  });
});

describe('postUserLogout', () => {
  beforeEach(() => {
    auth.signOut = jest.fn();
  });

  it('returns true after success logout', async () => {
    await postUserLogout();
  });
});

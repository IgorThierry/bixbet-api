import { User } from './User';

describe('User', () => {
  it('should be able to create a user', () => {
    const user = new User();

    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('createdAt');
  });
});

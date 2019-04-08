import { expect } from 'chai';
import { foo } from './api';

describe('api.foo', () => {
  it('typeof foo === function', () => {
    expect(typeof foo).to.equal('function');
  });
  it('foo(string) -> OK', () => {
    try {
      foo('lol');
      expect.fail();
    } catch {
      expect(true).true;
    }
  });
});

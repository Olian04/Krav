import { expect } from 'chai';
import * as krav from './api';

describe('api', () => {
  it('assert === expect === assume', () => {
    expect(krav.assert)
      .to.equal(krav.assume)
      .to.equal(krav.expect);
  });
  it('assert is a function', () => {
    expect(typeof krav.assert).to.equal('function');
  });
});

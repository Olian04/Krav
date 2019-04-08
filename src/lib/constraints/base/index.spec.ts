import * as krav from '../../../api';
import { expectToFail } from '../../../util/testing';

describe('BaseConstraint', () => {
  it('assert(number).Number', () => {
    expectToFail(false, () =>
      krav.assert(12).Number,
    );
  });
  it('not assert(string).String', () => {
    expectToFail(false, () =>
      krav.assert('foo').String,
    );
  });
});

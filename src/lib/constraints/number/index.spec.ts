import * as krav from '../../../api';
import { expectToFail } from '../../../util/testing';

describe('NumberConstraint', () => {
  it('assert(number).Number', () => {
    expectToFail(false, () =>
      krav.assert(12).Number,
    );
  });
  it('assert(string).Number', () => {
    expectToFail(true, () =>
      krav.assert('foo').Number,
    );
  });
  it('assert(number).Number.Exact(same)', () => {
    expectToFail(false, () =>
      krav.assert(12).Number.Exact(12),
    );
  });
  it('assert(number).Number.Exact(different)', () => {
    expectToFail(true, () =>
      krav.assert(12).Number.Exact(42),
    );
  });
  it('assert(number).Number.not.Exact(different)', () => {
    expectToFail(false, () =>
      krav.assert(12).Number.not.Exact(42),
    );
  });
  it('assert(number).Number.not.Exact(same)', () => {
    expectToFail(true, () =>
      krav.assert(12).Number.not.Exact(12),
    );
  });
});

import * as krav from '../../../api';
import { expectToFail } from '../../../util/testing';

describe('BaseConstraint', () => {
  it('assert(number).Number', () => {
    expectToFail(false, () =>
      krav.assert(12).Number,
    );
  });
  it('assert(string).String', () => {
    expectToFail(false, () =>
      krav.assert('foo').String,
    );
  });
  it('assert(boolean).Boolean', () => {
    expectToFail(false, () =>
      krav.assert(false).Boolean,
    );
  });
  it('assert(regex).Regex', () => {
    expectToFail(false, () =>
      krav.assert(/foo/).Regex,
    );
  });
  it('assert(any).fail()', () => {
    expectToFail(true, () =>
      krav.assert(null).fail(),
    );
  });
  it('assert(any).pass()', () => {
    expectToFail(false, () =>
      krav.assert(null).pass(),
    );
  });
});

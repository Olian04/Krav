import * as krav from '../../../api';
import { expectToFail } from '../../../util/testing';

describe('StringConstraint', () => {
  it('assert(string).String', () => {
    expectToFail(false, () =>
      krav.assert('foo').String,
    );
  });
  it('assert(number).String', () => {
    expectToFail(true, () =>
      krav.assert(12).String,
    );
  });
  it('assert(string).String.Exact(same)', () => {
    expectToFail(false, () =>
      krav.assert('foo').String.Exact('foo'),
    );
  });
  it('assert(string).String.Exact(different)', () => {
    expectToFail(true, () =>
      krav.assert('foo').String.Exact('bar'),
    );
  });
  it('assert(string).String.Length', () => {
    expectToFail(false, () =>
      krav.assert('foo').String.Length,
    );
  });
  it('assert(string).String.not.Exact(different)', () => {
    expectToFail(false, () =>
      krav.assert('foo').String.not.Exact('bar'),
    );
  });
  it('assert(string).String.not.Exact(same)', () => {
    expectToFail(true, () =>
      krav.assert('foo').String.not.Exact('foo'),
    );
  });
  it('assert(string).String.not.Length.Exact(ok)', () => {
    expectToFail(true, () =>
      krav.assert('foo').String.not.Length.Exact(3),
    );
  });
  it('assert(string).String.Either([fail, ok])', () => {
    expectToFail(false, () =>
      krav.assert('foo').String.Either([ 'bar', 'foo' ]),
    );
  });
  it('assert(string).String.Either([fail, fail])', () => {
    expectToFail(true, () =>
      krav.assert('foo').String.Either([ 'bar', 'biz' ]),
    );
  });
  it('assert(string).String.StartsWith(ok)', () => {
    expectToFail(false, () =>
      krav.assert('foo').String.StartsWith('fo'),
    );
  });
  it('assert(string).String.StartsWith(fail)', () => {
    expectToFail(true, () =>
      krav.assert('foo').String.StartsWith('ba'),
    );
  });
  it('assert(string).String.EndsWith(ok)', () => {
    expectToFail(false, () =>
      krav.assert('foo').String.EndsWith('oo'),
    );
  });
  it('assert(string).String.EndsWith(fail)', () => {
    expectToFail(true, () =>
      krav.assert('foo').String.EndsWith('ar'),
    );
  });
  it('assert(string).String.Matches(ok)', () => {
    expectToFail(false, () =>
    krav.assert('foo').String.Matches(/^fo{2}$/),
    );
  });
  it('assert(string).String.Matches(fail)', () => {
    expectToFail(true, () =>
      krav.assert('foo').String.Matches(/^fo{1}$/),
    );
  });
});

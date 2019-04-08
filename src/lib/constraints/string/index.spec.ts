import * as krav from '../../../api';
import { expectToFail } from '../../../util/testing';

describe('StringConstraint', () => {
  it('assert(string).String', () => {
    expectToFail(false, () =>
      krav.assert('foo').String,
    );
    expectToFail(true, () =>
      krav.assert(12).String,
    );
  });
  it('assert(string).String.Exact(string)', () => {
    expectToFail(false, () =>
      krav.assert('foo').String.Exact('foo'),
    );
    expectToFail(true, () =>
      krav.assert('foo').String.Exact('bar'),
    );
  });
  it('assert(string).String.Length', () => {
    expectToFail(false, () =>
      krav.assert('foo').String.Length,
    );
  });
  it('assert(string).String.not.Length.Exact(ok)', () => {
    expectToFail(true, () =>
      krav.assert('foo').String.not.Length.Exact(3),
    );
  });
  it('assert(string).String.not.Exact(number)', () => {
    expectToFail(false, () =>
      krav.assert('foo').String.not.Exact('bar'),
    );
    expectToFail(true, () =>
      krav.assert('foo').String.not.Exact('foo'),
    );
  });
  it('assert(string).String.Either(string[])', () => {
    expectToFail(false, () =>
      krav.assert('foo').String.Either([ 'bar', 'foo' ]),
    );
    expectToFail(true, () =>
      krav.assert('foo').String.Either([ 'bar', 'biz' ]),
    );
  });
  it('assert(string).String.StartsWith(string)', () => {
    expectToFail(false, () =>
      krav.assert('foo').String.StartsWith('fo'),
    );
    expectToFail(true, () =>
      krav.assert('foo').String.StartsWith('ba'),
    );
  });
  it('assert(string).String.EndsWith(string)', () => {
    expectToFail(false, () =>
      krav.assert('foo').String.EndsWith('oo'),
    );
    expectToFail(true, () =>
      krav.assert('foo').String.EndsWith('ar'),
    );
  });
  it('assert(string).String.Matches(regex)', () => {
    expectToFail(false, () =>
    krav.assert('foo').String.Matches(/^fo{2}$/),
    );
    expectToFail(true, () =>
      krav.assert('foo').String.Matches(/^fo{1}$/),
    );
  });
});

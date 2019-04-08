import * as krav from '../../../api';
import { expectToFail } from '../../../util/testing';

describe('NumberConstraint', () => {
  it('assert(number).Number', () => {
    expectToFail(false, () =>
      krav.assert(12).Number,
    );
    expectToFail(true, () =>
      krav.assert('foo').Number,
    );
  });
  it('assert(number).Number.Exact(number)', () => {
    expectToFail(false, () =>
      krav.assert(12).Number.Exact(12),
    );
    expectToFail(true, () =>
      krav.assert(12).Number.Exact(42),
    );
  });
  it('assert(number).Number.not.Exact(number)', () => {
    expectToFail(false, () =>
      krav.assert(12).Number.not.Exact(42),
    );
    expectToFail(true, () =>
      krav.assert(12).Number.not.Exact(12),
    );
  });
  it('assert(number).Number.Max(number)', () => {
    expectToFail(false, () =>
      krav.assert(12).Number.Max(13),
    );
    expectToFail(true, () =>
      krav.assert(12).Number.Max(11),
    );
  });
  it('assert(number).Number.Min(number)', () => {
    expectToFail(false, () =>
      krav.assert(12).Number.Min(11),
    );
    expectToFail(true, () =>
      krav.assert(12).Number.Min(13),
    );
  });
  it('assert(number).Number.Natural', () => {
    expectToFail(false, () =>
      krav.assert(12).Number.Natural,
    );
    expectToFail(true, () =>
      krav.assert(-12).Number.Natural,
    );
    expectToFail(true, () =>
      krav.assert(1.2).Number.Natural,
    );
  });
  it('assert(number).Number.Mod(number, number)', () => {
    expectToFail(false, () =>
      krav.assert(12).Number.Mod(4, 0),
    );
    expectToFail(true, () =>
      krav.assert(12).Number.Mod(5, 0),
    );
  });
  it('assert(number).Number.Whole', () => {
    expectToFail(false, () =>
      krav.assert(12).Number.Whole,
    );
    expectToFail(true, () =>
      krav.assert(1.2).Number.Whole,
    );
  });
  it('assert(number).Number.Between(number, number)', () => {
    expectToFail(false, () =>
      krav.assert(12).Number.Between(11, 13),
    );
    expectToFail(false, () =>
      krav.assert(12).Number.Between(12, 13),
    );
    expectToFail(false, () =>
      krav.assert(12).Number.Between(11, 12),
    );
    expectToFail(true, () =>
      krav.assert(12).Number.Between(13, 14),
    );
    expectToFail(true, () =>
      krav.assert(12).Number.Between(3, 4),
    );
  });
  it('assert(number).Number.Either([number, number])', () => {
    expectToFail(false, () =>
      krav.assert(12).Number.Either([2, 12]),
    );
    expectToFail(false, () =>
      krav.assert(12).Number.Either([12, 2]),
    );
    expectToFail(true, () =>
      krav.assert(12).Number.Either([11, 13]),
    );
  });
});

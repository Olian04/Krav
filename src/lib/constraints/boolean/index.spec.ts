import * as krav from '../../../api';
import { expectToFail } from '../../../util/testing';

describe('BooleanConstraint', () => {
  it('assert(boolean).Boolean', () => {
    expectToFail(false, () =>
      krav.assert(false).Boolean,
    );
    expectToFail(true, () =>
      krav.assert(12).Boolean,
    );
  });
  it('assert(boolean).Boolean.True', () => {
    expectToFail(false, () =>
      krav.assert(true).Boolean.True,
    );
    expectToFail(true, () =>
      krav.assert(false).Boolean.True,
    );
  });
  it('assert(boolean).Boolean.False', () => {
    expectToFail(false, () =>
      krav.assert(false).Boolean.False,
    );
    expectToFail(true, () =>
      krav.assert(true).Boolean.False,
    );
  });
  it('assert(boolean).Boolean.not.True', () => {
    expectToFail(false, () =>
      krav.assert(false).Boolean.not.True,
    );
    expectToFail(true, () =>
      krav.assert(true).Boolean.not.True,
    );
  });
  it('assert(boolean).Boolean.not.not.False', () => {
    expectToFail(false, () =>
      krav.assert(false).Boolean.not.not.False,
    );
    expectToFail(true, () =>
      krav.assert(true).Boolean.not.not.False,
    );
  });
});

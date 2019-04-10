import * as krav from '../../../api';
import { expectToFail } from '../../../util/testing';

describe('RegexConstraint', () => {
  it('assert(regex).Regex', () => {
    expectToFail(false, () =>
      krav.assert(/foo/).Regex,
    );
    expectToFail(true, () =>
      krav.assert(12).Regex,
    );
  });
  it('assert(regex).Regex.Test(string)', () => {
    expectToFail(false, () =>
      krav.assert(/foo/).Regex.Test('foo'),
    );
    expectToFail(true, () =>
      krav.assert(/foo/).Regex.Test('fo'),
    );
  });
  it('assert(regex).Regex.not.Test(string)', () => {
    expectToFail(false, () =>
      krav.assert(/foo/).Regex.not.Test('fo'),
    );
    expectToFail(true, () =>
      krav.assert(/foo/).Regex.not.Test('foo'),
    );
  });
});

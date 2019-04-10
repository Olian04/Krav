import * as AssertionError from 'assertion-error';
import { assertHelper } from '../../../util/assert-error';

export const BooleanConstraint = (target: unknown, isInverted: boolean) => {
  if ( !guard(target) ) {
    throw new AssertionError(`Expected ${target} to be of type String`);
  }
  return builder(target, isInverted);
};

const guard = (target: unknown): target is boolean => typeof target === 'boolean';

const builder = (target: boolean, isInverted: boolean) => ({
  get not() {
    return builder(target, !isInverted);
  },
  get True() {
    assertHelper({
      isInverted,
      assertion: target === true,
      errorMessage: `Expected ${target} to be true`,
    });
    return builder(target, isInverted);
  },
  get False() {
    assertHelper({
      isInverted,
      assertion: target === false,
      errorMessage: `Expected ${target} to be false`,
    });
    return builder(target, isInverted);
  },
});

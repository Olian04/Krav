import * as AssertionError from 'assertion-error';
import { assertHelper } from '../../../util/assert-error';

export const RegexConstraint = (target: unknown, isInverted: boolean) => {
  if ( !guard(target) ) {
    throw new AssertionError(`Expected ${target} to be of type String`);
  }
  return builder(target, isInverted);
};

const guard = (target: unknown): target is RegExp => target instanceof RegExp;

const builder = (target: RegExp, isInverted: boolean) => ({
  get not() {
    return builder(target, !isInverted);
  },
  Test(str: string) {
    assertHelper({
      isInverted,
      assertion: target.test(str),
      errorMessage: `Expected ${target} to match string "${str}"`,
    });
    return builder(target, isInverted);
  },
});

import * as AssertionError from 'assertion-error';
import { NumberConstraint } from '..';
import { assertHelper } from '../../../util/assert-error';

export const StringConstraint = (target: unknown, isInverted: boolean) => {
  if ( !guard(target) ) {
    throw new AssertionError(`Expected ${target} to be of type String`);
  }
  return builder(target, isInverted);
};

const guard = (target: unknown): target is string => typeof target === 'string';

const builder = (target: string, isInverted: boolean) => ({
  get not() {
    return builder(target, !isInverted);
  },
  Exact(value: string) {
    assertHelper({
      isInverted,
      assertion: target === value,
      errorMessage: `Expected ${target} to equal ${value}`,
    });
    return builder(target, isInverted);
  },
  get Length() {
    return NumberConstraint(target.length, isInverted);
  },
  Either(options: string[]) {
    assertHelper({
      isInverted,
      assertion: options.indexOf(target) !== -1,
      errorMessage: `Expected ${target} to equal one of [${options.map((v) => '"' + v + '"').join(', ')}]`,
    });
    return builder(target, isInverted);
  },
  StartsWith(value: string) {
    assertHelper({
      isInverted,
      assertion: target.startsWith(value),
      errorMessage: `Expected ${target} to start with ${value}`,
    });
    return builder(target, isInverted);
  },
  EndsWith(value: string) {
    assertHelper({
      isInverted,
      assertion: target.endsWith(value),
      errorMessage: `Expected ${target} to end with ${value}`,
    });
    return builder(target, isInverted);
  },
  Matches(regex: RegExp) {
    assertHelper({
      isInverted,
      assertion: regex.test(target),
      errorMessage: `Expected ${target} to match ${regex}`,
    });
    return builder(target, isInverted);
  },
});

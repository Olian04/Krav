import * as AssertionError from 'assertion-error';
import {
  BooleanConstraint,
  NumberConstraint,
  RegexConstraint,
  StringConstraint,
} from '..';

export const BaseConstraint = (target: unknown, isInverted: boolean) => {
  return builder(target, isInverted);
};

const builder = (target: unknown, isInverted: boolean) =>  ({
  // TODO: implement "not" on the base constraint.
  // This will cause issues with type guarding in subsequent constraints.
  get String() {
    return StringConstraint(target, isInverted);
  },
  get Number() {
    return NumberConstraint(target, isInverted);
  },
  get Boolean() {
    return BooleanConstraint(target, isInverted);
  },
  get Regex() {
    return RegexConstraint(target, isInverted);
  },
  fail() {
    throw new AssertionError('forced FAIL due to call to BaseConstraint.fail()');
  },
  pass(): void {
    // forced PASS due to call to BaseConstraint.pass()
  },
});

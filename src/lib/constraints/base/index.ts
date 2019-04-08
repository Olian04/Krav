import {
  NumberConstraint,
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
});

import { conditionalInvert } from '../../../util/booleanLogic';

export const NumberConstraint = (target: unknown, isInverted: boolean) => {
  if ( !guard(target) ) {
    throw new Error(`Expected ${target} to be of type Number`);
  }
  return builder(target, isInverted);
};

const guard = (target: unknown): target is number => typeof target === 'number';

const builder = (target: unknown, isInverted: boolean) => ({
  get not() {
    return builder(target, !isInverted);
  },
  Exact(value: number) {
    if ( conditionalInvert(isInverted, target !== value) ) {
      throw new Error(`Expected ${target} to equal ${value}`);
    }
    return builder(target, isInverted);
  },
});

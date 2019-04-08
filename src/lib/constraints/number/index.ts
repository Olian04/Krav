import { assertHelper } from '../../../util/assert-error';

export const NumberConstraint = (target: unknown, isInverted: boolean) => {
  if ( !guard(target) ) {
    throw new Error(`Expected ${target} to be of type Number`);
  }
  return builder(target, isInverted);
};

const guard = (target: unknown): target is number => typeof target === 'number';

const builder = (target: number, isInverted: boolean) => ({
  get not() {
    return builder(target, !isInverted);
  },
  Exact(value: number) {
    assertHelper({
      isInverted,
      assertion: target === value,
      errorMessage: `Expected ${target} to equal ${value}`,
    });
    return builder(target, isInverted);
  },
  Max(value: number) {
    assertHelper({
      isInverted,
      assertion: target <= value,
      errorMessage: `Expected ${target} to be smaller or equal to ${value}`,
    });
    return builder(target, isInverted);
  },
  Min(value: number) {
    assertHelper({
      isInverted,
      assertion: target >= value,
      errorMessage: `Expected ${target} to be larger or equal to ${value}`,
    });
    return builder(target, isInverted);
  },
  get Natural() {
    assertHelper({
      isInverted,
      assertion: target % 1 === 0 && target >= 0,
      errorMessage: `Expected ${target} to be a Natural number`,
    });
    return builder(target, isInverted);
  },
  Mod(modulo: number, equal: number) {
    assertHelper({
      isInverted,
      assertion: target % modulo === equal,
      errorMessage: `Expected ${target} % ${module} === ${equal}`,
    });
    return builder(target, isInverted);
  },
  get Whole() {
    assertHelper({
      isInverted,
      assertion: target % 1 === 0,
      errorMessage: `Expected ${target}  to be a Whole number`,
    });
    return builder(target, isInverted);
  },
  Between(lower: number, upper: number) {
    assertHelper({
      isInverted,
      assertion: target >= lower && target <= upper,
      errorMessage: `Expected ${target} to be between ${lower} and ${upper}`,
    });
    return builder(target, isInverted);
  },
  Either(options: number[]) {
    assertHelper({
      isInverted,
      assertion: options.includes(target),
      errorMessage: `Expected ${target} to equal one of [${options.map((v) => '"' + v + '"').join(', ')}]`,
    });
    return builder(target, isInverted);
  },
});

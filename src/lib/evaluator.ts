import { BaseConstraint } from './constraints';

export const evaluate = (target: unknown) => BaseConstraint(target, false);

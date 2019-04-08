import * as AssertionError from 'assertion-error';
import { conditionalInvert } from './booleanLogic';

export const assertHelper = (ctx: {isInverted: boolean, assertion: boolean, errorMessage: string}) => {
  if (conditionalInvert(ctx.isInverted, ctx.assertion)) {
    throw new AssertionError(ctx.errorMessage);
  }
};

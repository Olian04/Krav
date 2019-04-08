export const conditionalInvert = (isInverted: boolean, booleanExpression: boolean): boolean =>
  isInverted ? !booleanExpression : booleanExpression;

import { expect } from 'chai';

export const expectToFail = (shouldFail: boolean, cb: () => void) => {
  let failed;
  try {
    cb();
    failed = false;
  } catch (e) {
    failed = true;
  }

  const cbBody = cb.toString();
  expect(failed,
    `Expected ${cbBody.slice(cbBody.indexOf('=>') + 2).trim()} to ${shouldFail ? 'fail' : 'succeed'} but it didn't`,
  ).to.equal(shouldFail);
};

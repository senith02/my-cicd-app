let expect;

before(async () => {
  const chai = await import('chai');
  expect = chai.expect;
});

describe('Basic Test', () => {
  it('should return true', () => {
    expect(true).to.equal(true);
  });
});
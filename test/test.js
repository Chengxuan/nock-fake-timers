const axios = require('axios');
const { expect } = require('chai');
const nock = require('nock');
const sinon = require('sinon');

describe('Test', () => {
  const url = 'http://www.google.com';
  let clock;

  before(() => clock = sinon.useFakeTimers());
  after(() => clock.restore());

  beforeEach(() => nock(url).get('/').reply(201));
  afterEach(() => expect(nock.isDone()).to.equal(true));

  it('should pass this test', async () => {
    const res = await axios(url);
    expect(res.status).to.equal(201);
  });
});

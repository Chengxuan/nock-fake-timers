const axios = require('axios');
const { expect } = require('chai');
const nock = require('nock');
const lolex = require('lolex');

describe('Test', () => {
  const url = 'http://www.google.com';
  let clock;

  before(() => clock = lolex.install());
  after(() => clock.uninstall());

  beforeEach(() => nock(url).get('/').reply(201));
  afterEach(() => expect(nock.isDone()).to.equal(true));

  it('should pass this test', async () => {
    const res = await axios(url);
    expect(res.status).to.equal(201);
  });
});

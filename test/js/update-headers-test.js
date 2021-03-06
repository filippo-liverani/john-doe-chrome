const expect = require('chai').expect;
const updateHeaders = require('../../src/js/update-headers.js');

describe('updateHeaders', function () {
    it('replaces Accept header value', function () {
    const header = {
      name: 'Accept',
      value: 'application/private'
    };

    const updatedHeaders = updateHeaders([header]);
    expect(updatedHeaders[0].value).to.equal('text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8');
  });

  it('replaces Accept-Encoding header value', function () {
    const header = {
      name: 'Accept-Encoding',
      value: 'privateencoding'
    };

    const updatedHeaders = updateHeaders([header]);
    expect(updatedHeaders[0].value).to.equal('gzip, deflate');
  });

  it('replaces User-Agent header value', function () {
    const header = {
      name: 'User-Agent',
      value: 'Privatezilla/1.0'
    };
    const userAgent = 'Correctzilla/1.0';

    const updatedHeaders = updateHeaders([header], 'unused_url', 0, userAgent);
    expect(updatedHeaders[0].value).to.equal(userAgent);
  });

  it('replaces Referer header value when domain changes', function () {
    const header = {
      name: 'Referer',
      value: 'http://private.url'
    };
    const destinationUrl = 'http://another.url';

    const updatedHeaders = updateHeaders([header], destinationUrl);
    expect(updatedHeaders[0].value).to.equal(destinationUrl);
  });

  it('removes cookies when url is a google search', function () {
    const header = {
      name: 'Cookie',
      value: 'SID=session_id_cookie_value'
    };
    const url = 'https://encrypted.google.com/search?q=test+search';

    const updatedHeaders = updateHeaders([header], url);
    expect(updatedHeaders[0].value).to.equal('');
  });
});

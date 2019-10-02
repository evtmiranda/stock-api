var expect = require('chai').expect;
var getBrazilianDate = require('./getBrazilianDate');

it('getBrazilianDate need return an date object', function (done) {
    const brazilianDate = getBrazilianDate();

    expect(brazilianDate).to.not.null
    done();
});
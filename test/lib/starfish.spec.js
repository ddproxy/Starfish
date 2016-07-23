const starfish = require('../../lib/starfish');

describe('starfish', function() {
  it('exists', function() {
    expect(starfish).to.exist;
  });

  it('has an insert function', function() {
    starfish.should.have.property('insert');
    // starfish.insert.should.equal(insert);
  });

  it('has an update function', function() {
    starfish.should.have.property('update');
    // starfish.update.should.equal(update);
  });

  it('has a get function', function() {
    starfish.should.have.property('get');
    // starfish.get.should.equal(get);
  });

  it('has a remove function', function() {
    starfish.should.have.property('remove');
    // starfish.remove.should.equal(remove);
  });
});
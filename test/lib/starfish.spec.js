const starfish = require('../../lib/starfish');

describe('starfish', function() {
  it('exists', function() {
    expect(starfish).to.exist;
  });

  it('has a registerDataStore function', function() {
    starfish.should.have.property('registerDataStore');
    // starfish.registerDataStore.should.equal(registerDataStore);
  });

  it('has a removeDataStore function', function() {
    starfish.should.have.property('removeDataStore');
    // starfish.removeDataStore.should.equal(removeDataStore);
  });

  it('has an insert function', function() {
    starfish.should.have.property('insert');
    // starfish.insert.should.equal(insert);
  });

  it('has an update function', function() {
    starfish.should.have.property('update');
    // starfish.update.should.equal(update);
  });

  it('has a fetch function', function() {
    starfish.should.have.property('fetch');
    // starfish.fetch.should.equal(fetch);
  });

  it('has a remove function', function() {
    starfish.should.have.property('remove');
    // starfish.remove.should.equal(remove);
  });
});
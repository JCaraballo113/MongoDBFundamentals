const mongoose = require('mongoose');
const User = require('../src/User');

beforeEach(done => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});

describe('Reading users out of the database', () => {
  let joe;

  beforeEach(done => {
    joe = new User({ name: 'Joe' });

    joe.save().then(() => done());
  });

  it('Finds all users with the name of Joe', (done) => {
    User.find({ name: 'Joe'})
    .then((users) => {
      expect(users[0]._id.toString()).toBe(joe._id.toString());
      done();
    });
  });
});
const mongoose = require('mongoose');
const User = require('../src/User');

beforeEach(done => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});

afterAll(done => {
  mongoose.disconnect(() => done());
});

describe('Creating Records', () => {
  it ('it saves a user', (done) => {
    const joe = new User({ name: 'Joe' });

    joe.save().then(() => {
      // Has joe been saved successfully
      expect(joe.isNew).toBe(false);
      done();
    });
  });
});
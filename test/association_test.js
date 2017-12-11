const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/User');
const Comment = require('../src/Comment');
const BlogPost = require('../src/BlogPost');

describe('Associations', () => {
  let joe, blogPost, comment;
  
  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    blogPost = new BlogPost({ title: 'JS is great', content: 'Yep it really is'});
    comment = new Comment({ content: 'Congrats on the great post' });

    joe.blogPosts.push(blogPost);
    blogPost.comments.push(comment);
    comment.user = joe;

    Promise.all([joe.save(), blogPost.save(), comment.save()]).then(() => done());
  });

  it.only('saves a relation between a user and a blog post', (done) => {
    User.findOne({ name: 'Joe'})
    .then(user => {
      console.log(user);
      done();
    });
  });
});
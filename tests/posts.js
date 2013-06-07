var assert = require('assert');

suite('Post Method', function() {
  ltest('without login', function(done, server, client) {
    client.eval(function() {
      Meteor.call('post', {url: 'http://a.com', title: 'The Title'}, function(err) {
        emit('posted', err);
      });
    });

    client.on('posted', function(err) {
      assert.equal(err.error, 401);
      done();
    });
  });

  ltest('with login', function(done, server, client) {
    client.eval(function() {
      Accounts.createUser({username: 'arunoda', password: '123456'}, function(err) {
        emit('created', err);
      });
    });

    client.on('created', function(err) {
      assert.equal(err, null);
      client.eval(function() {
        Meteor.call('post', {title: 'google', url: 'http://google.com'}, function(err, id) {
          emit('posted', err, id);
        });
      });
    });

    client.on('posted', function(err, id) {
      assert.equal(err, null);
      assert.ok(id);
      server.eval(function() {
        var posts = Posts.find({title: 'google'}).fetch();
        emit('posts', posts);
      })
    });

    server.on('posts', function(posts) {
      assert.equal(posts.length, 1);
      done();
    });
  });
});
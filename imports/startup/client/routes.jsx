import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../../ui/layouts/App.jsx';
import PostsListPage from '../../ui/pages/PostsListPage.jsx';
import PostsShowPage from '../../ui/pages/PostsShowPage.jsx';

FlowRouter.route('/', {
  name: 'posts.new',
  action() {
    mount(App, {
      main: () => <PostsListPage />,
    });
  },
});

FlowRouter.route('/posts/:_id', {
  name: 'posts.show',
  action() {
    mount(App, {
      main: () => <PostsShowPage />,
    });
  },
});

FlowRouter.route('/posts/:_id/edit', {
  name: 'posts.edit',
  action() {
    mount(App, {
      main: () => <PostsEditPage />,
    });
  },
});

FlowRouter.route('/submit', {
  name: 'posts.new',
  action() {
    mount(App, {
      main: () => <PostsNewPage />,
    });
  },
});

import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../../ui/layouts/App.jsx';
import PostsListPage from '../../ui/pages/PostsListPage.jsx';

FlowRouter.route('/', {
  name: 'posts.list',
  action() {
    mount(App, {
      main: () => <PostsListPage />,
    });
  },
});

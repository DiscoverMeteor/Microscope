import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../../ui/layouts/App.jsx';
import PostsList from '../../ui/pages/PostsList.jsx';

FlowRouter.route('/', {
  name: 'posts.list',
  action() {
    console.log('here', <PostsList />)
    mount(App, {
      main: () => <PostsList />,
    });
  },
});

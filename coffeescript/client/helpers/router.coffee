Meteor.Router.add
  '/': {to: 'newPosts', as: 'home'}
  '/best': 'bestPosts'
  '/new': 'newPosts'

  '/posts/:_id':
    to: 'postPage'
    and: (id)->
      Session.set 'currentPostId', id

  '/posts/:_id/edit':
    to: 'postEdit'
    and: (id)->
      Session.set('currentPostId', id)

  '/submit': 'postSubmit'

Meteor.Router.filters
  'requireLogin':(page)->
    if Meteor.user()
      return page
    else if Meteor.loggingIn()
      return 'loading'
    else
      return 'accessDenied'
  'clearErrors': (page)->
    Meteor.Errors.clear()
    return page

Meteor.Router.filter('requireLogin', {only: 'postSubmit'})
Meteor.Router.filter('clearErrors')

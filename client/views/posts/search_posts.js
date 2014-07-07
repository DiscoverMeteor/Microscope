Template.searchPosts.events({
  'submit': function(e, template) {
    e.preventDefault();
    Router.go('searchPosts', {term: $(e.target).find('[name=term]').val()})
  }
});
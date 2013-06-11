Accounts.onCreateUser(function(options, user) {
  user.intercomHash = IntercomHash(user, '12345678');

  if (options.profile)
    user.profile = options.profile;

  return user;
});  

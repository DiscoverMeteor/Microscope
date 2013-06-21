var MAILCHIMP_LIST_ID = '8af64c21ed';

// sign users up to mailchimp when they are created
Accounts.validateNewUser(function(user) {
  // XXX: what to do here?
  if (! user.emails)
    return;
  
  var email = user.emails[0].address;
  
  MailChimp.listSubscribe({
    id: MAILCHIMP_LIST_ID,
    email_address: email
  });
  
  return user;
});
var MAILCHIMP_LIST_ID = '8af64c21ed';
var MAILCHIMP_API_KEY = 'a20d3e317c6bfe0a08088887c71c05cd-us7';

// sign users up to mailchimp when they are created
Accounts.validateNewUser(function(user) {
  // XXX: what to do here?
  if (! user.emails)
    return;
  
  var email = user.emails[0].address;
  
  var mailChimp = new MailChimpAPI(MAILCHIMP_API_KEY, { version : '1.3', secure : false });
  
  mailChimp.listSubscribe({
    id: MAILCHIMP_LIST_ID,
    email_address: email
  });
  
  return user;
});
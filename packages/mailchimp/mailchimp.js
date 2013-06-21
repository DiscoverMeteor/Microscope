var MailChimpAPI = Npm.require('mailchimp').MailChimpAPI;

var API_KEY = 'a20d3e317c6bfe0a08088887c71c05cd-us7';
var LIST_ID = '8af64c21ed';

var Future = Npm.require('fibers/future');
var MailChimpAPIObject = new MailChimpAPI(API_KEY, { version : '1.3', secure : false });

MailChimp = {
  listSubscribe: function(options) {
    var future = new Future();
    MailChimpAPIObject.listSubscribe(options, function(err, res) {
      if (err) {
        future.throw(err);
      } else {
        future.return(res);
      }
    });
    
    return future.wait();
  }
}

// XXX: temporary
Meteor.methods({
  subscribe: function(email) {
    MailChimp.listSubscribe({
      id: LIST_ID,
      email_address: email
    });
  }
})

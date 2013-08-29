getBitlyClicks = function(link){
  var statsResponse = Meteor.http.get(
    "https://api-ssl.bitly.com/v3/link/clicks?", 
    {
      timeout: 5000,
      params:{ 
        "format": "json",
        "access_token": 'a5bd3da617a664779650ee8bfcf16f747c8d361a',
        "link": link
      }
    }
  );
  if(statsResponse.data.status_code == 200)
    return statsResponse.data.data.link_clicks
}

Meteor.methods({
  'getBitlyClicks': function(link){
    return getBitlyClicks(link);
  }
});

var callInterval = 10000; // 1000ms * 10 = 10s

Meteor.setInterval(function(){
  // get all posts with the shortUrl property
  var shortUrlPosts = Posts.find({shortUrl: { $exists: true }});
  var postsNumber = shortUrlPosts.count();

  // initialize counter
  var count = 0;

  shortUrlPosts.forEach(function(post){
    // calculate the right delay to distribute API calls evenly throughout the interval
    var callTimeout = Math.round(callInterval/postsNumber*count);

    Meteor.setTimeout(function(){
      Posts.update(post._id, {$set: {clicks: getBitlyClicks(post.shortUrl)}});
    }, callTimeout);
    
    count++;
  });

}, callInterval);
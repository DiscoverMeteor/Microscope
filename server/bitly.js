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
})
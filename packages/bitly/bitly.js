Bitly = {};

Bitly.shortenURL = function(url){
  var shortenResponse = Meteor.http.get(
    "https://api-ssl.bitly.com/v3/shorten?", 
    {
      timeout: 5000,
      params:{ 
        "format": "json",
        "access_token": 'a5bd3da617a664779650ee8bfcf16f747c8d361a',
        "longUrl": url
      }
    }
  );
  if(shortenResponse.statusCode == 200){
    return shortenResponse.data.data.url
  }else{
    throw new Meteor.Error(500, "Bitly call failed with error: "+shortenResponse.status_txt);
  }
}

Bitly.getClicks = function(link){
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
    return Bitly.getClicks(link);
  }
})
Posts = new Meteor.Collection('posts');

Posts.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Posts.deny({
  update: function(userId, post, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'url', 'title').length > 0);
  }
});

Meteor.methods({
  post: function(postAttributes) {
    check(postAttributes, Object);
    
    var user = Meteor.user(),
    
    checkURL = function(URLString){

      URLArray = [
        URLString, 
        "www."+URLString,
        "http://"+URLString,
        "https://"+URLString,
        "http://www."+URLString,
        "https://www."+URLString
      ];

      for (var i = 0; i < URLArray.length; i++) {
          
        checkResult = Posts.findOne({url: URLArray[i]});

        if (checkResult) { 
          throw new Meteor.Error(302, 'This link has already been posted', checkResult._id);
        }
      }
    }; 
    
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post new stories");
    
    // ensure the post has a title
    if (!postAttributes.title)
      throw new Meteor.Error(422, "Please fill in a headline");
    
    //check that there are no previous posts with the same link
    if (postAttributes.url) {

      pAIndexP = postAttributes.url.indexOf('www.');
      pAIndexS = postAttributes.url.indexOf('//');
      
      if (pAIndexP === -1 && pAIndexS === -1){
        checkURL(postAttributes.url);

      }else if (pAIndexP === -1 && pAIndexS !== -1){
        startURL = postAttributes.url.substring(pAIndexS+2, postAttributes.url.length);
        checkURL(startURL);

      }else if ((pAIndexP !== -1)){
        startURL = postAttributes.url.substring(pAIndexP+4, postAttributes.url.length);
        checkURL(startURL);
      }
    }
    
    // pick out the whitelisted keys
    var post = _.extend(_.pick(postAttributes, 'url', 'title', 'message'), {
      userId: user._id, 
      author: user.username, 
      submitted: new Date(),
      commentsCount: 0,
      upvoters: [], votes: 0
    });
    
    var postId = Posts.insert(post);
    
    return postId;
  },
  
  upvote: function(postId) {
    check(postId, String);
    
    var user = Meteor.user();
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to upvote");
    
    var affected = Posts.update({
      _id: postId, 
      upvoters: {$ne: user._id}
    }, {
      $addToSet: {upvoters: user._id},
      $inc: {votes: 1}
    });
    
    if (! affected)
      throw new Meteor.Error(422, "You weren't able to upvote that post");
  }
});
// Actual text search function
searchPosts = function (query) {
    var Future = Npm.require('fibers/future');
    var future = new Future();
    MongoInternals.defaultRemoteCollectionDriver().mongo.db.executeDbCommand({
        text: 'posts',
        search: query,
        project: {
          id: 1 // Only take the ids
          ,title: 1
        }
     }
     , function(error, results) {
        console.log(error)
        console.log(results.documents[0].results)
        if (results && results.documents[0].ok === 1) {
            future.ret(results.documents[0].results);
        }
        else {
            future.ret('');
        }
    });
    console.log('future:')
    console.log(future.wait()) // <- not returning anything…
    return future.wait();
};

// Helper that extracts the ids from the search results
// question: why not just return the full post objects in the search results?
getSearchedPosts = function (query) {
    console.log('query: '+query)
    if (query && query !== '') {
        var searchResults = searchPosts(query);
        console.log('searchResults:')
        console.log(searchResults)
        var ids = [];
        for (var i = 0; i < searchResults.length; i++) {
            ids.push(searchResults[i].obj._id);
        }
        return ids;
    }
};
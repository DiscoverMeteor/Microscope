Meteor.startup(function () {
    indexName = 'postIndex'

    // Remove old indexes as you can only have one text index and if you add 
    // more fields to your index then you will need to recreate it.
    // Posts._dropIndex(indexName); // does not find the index to delete the first time, so commenting out this line

    Posts._ensureIndex({
        title: 'text',
        body: 'text',
        author: 'text',
    }, {
        name: 'jms_jobs_search_index'
    });
});